"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Project {
  id: number;
  title: string;
  description?: string;
  liveLink: string;
  frontendLink: string;
  backendLink: string;
  features: string[];
  technologies: string[];
  image?: string;
  createdAt: string;
}

const ProjectManagement = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    liveLink: "",
    frontendLink: "",
    image: "",
    backendLink: "",
    features: "",
    technologies: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (error) {
      console.error("Fetch projects error:", error);
      toast.error("Failed to fetch projects");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const authToken = sessionStorage.getItem("authToken");
      const user = JSON.parse(sessionStorage.getItem("user") || "{}");

      if (!user.id) {
        toast.error("User not found. Please login again.");
        return;
      }

      const formDataToSend = new FormData();

      // Add all form fields properly
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("liveLink", formData.liveLink);
      formDataToSend.append("frontendLink", formData.frontendLink);
      formDataToSend.append("backendLink", formData.backendLink);
      formDataToSend.append("adminId", user.id.toString());

      const featuresArray = formData.features
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f);
      const technologiesArray = formData.technologies
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t);

      featuresArray.forEach((feature) => {
        formDataToSend.append("features", feature);
      });

      technologiesArray.forEach((tech) => {
        formDataToSend.append("technologies", tech);
      });

      if (imageFile) {
        formDataToSend.append("image", imageFile);
      }

      const url = editingProject
        ? `${process.env.NEXT_PUBLIC_API_URL}/projects/${editingProject.id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/projects`;

      const method = editingProject ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error response:", errorText);
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        toast.success(
          editingProject
            ? "Project updated successfully"
            : "Project created successfully"
        );
        setIsDialogOpen(false);
        resetForm();
        fetchProjects();
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Failed to save project");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const authToken = sessionStorage.getItem("authToken");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        toast.success("Project deleted successfully");
        fetchProjects();
      } else {
        toast.error(data.message || "Failed to delete project");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete project");
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description || "",
      liveLink: project.liveLink,
      image: project.image || "",
      frontendLink: project.frontendLink,
      backendLink: project.backendLink,
      features: project.features.join(", "),
      technologies: project.technologies.join(", "),
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      liveLink: "",
      frontendLink: "",
      backendLink: "",
      features: "",
      technologies: "",
      image: "",
    });
    setEditingProject(null);
    setImageFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Project Management</h1>
        <Dialog
          open={isDialogOpen}
          onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (!open) {
              resetForm();
            }
          }}
        >
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                resetForm();
                setIsDialogOpen(true);
              }}
              className="flex items-center gap-2 text-white bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-xl overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProject ? "Edit Project" : "Add New Project"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={2}
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="liveLink">Live Link</Label>
                  <Input
                    id="liveLink"
                    name="liveLink"
                    value={formData.liveLink}
                    onChange={handleInputChange}
                    type="url"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="frontendLink">Frontend Link</Label>
                  <Input
                    id="frontendLink"
                    name="frontendLink"
                    value={formData.frontendLink}
                    onChange={handleInputChange}
                    type="url"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="backendLink">Backend Link</Label>
                <Input
                  id="backendLink"
                  name="backendLink"
                  value={formData.backendLink}
                  onChange={handleInputChange}
                  type="url"
                  required
                />
              </div>
              <div>
                <Label htmlFor="image">Project Image</Label>
                <Input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <Label htmlFor="features">Features (comma separated)</Label>
                <Textarea
                  id="features"
                  name="features"
                  value={formData.features}
                  onChange={handleInputChange}
                  placeholder="Feature 1, Feature 2, Feature 3"
                />
              </div>
              <div>
                <Label htmlFor="technologies">
                  Technologies (comma separated)
                </Label>
                <Textarea
                  id="technologies"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleInputChange}
                  placeholder="React, Node.js, MongoDB"
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading
                  ? "Saving..."
                  : editingProject
                  ? "Update Project"
                  : "Create Project"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Live Link</TableHead>
            <TableHead>Frontend Link</TableHead>
            <TableHead>Backend Link</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-gray-200">
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={50}
                    height={50}
                    className="rounded object-cover"
                  />
                )}
              </TableCell>
              <TableCell className="font-medium">{project.title}</TableCell>
              <TableCell>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Live
                </a>
              </TableCell>
              <TableCell>
                <a
                  href={project.frontendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Live
                </a>
              </TableCell>
              <TableCell>
                <a
                  href={project.backendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Live
                </a>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-blue-600 text-white border-none"
                    onClick={() => handleEdit(project)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(project.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectManagement;
