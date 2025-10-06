import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function getBlogs(): Promise<Blog[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?limit=3`, {
      next: { revalidate: 60 },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    if (!response.ok) return [];
    const data = await response.json();
    return data.data || [];
  } catch {
    return [];
  }
}

interface TipTapNode {
  type?: string;
  text?: string;
  content?: TipTapNode[];
}

interface TipTapContent {
  type: string;
  content?: TipTapNode[];
}

// Function to extract plain text from TipTap JSON content
function extractTextFromTipTap(content: string | TipTapContent | null | undefined): string {
  if (!content) return '';
  
  if (typeof content === 'string') {
    return content.substring(0, 150) + "...";
  }
  
  if (content.type === 'doc' && content.content) {
    let text = '';
    
    const extractText = (node: TipTapNode) => {
      if (node.text) {
        text += node.text;
      }
      if (node.content) {
        node.content.forEach(extractText);
      }
    };
    
    content.content.forEach(extractText);
    return text.substring(0, 150) + (text.length > 150 ? "..." : "");
  }
  
  return '';
}

export default async function BlogSection() {
  const blogs = await getBlogs();

  return (
    <section id="blogs" className="py-20 bg-[#000018] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl mb-16 font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Latest Blogs
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {blogs?.slice(0, 3)?.map((blog) => (
            <article 
              key={blog.id} 
              className="group bg-gray-950 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-600"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
               
                  <Image
                    src={blog.photo ||""} 
                    alt={blog.title}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
              
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category/Tag Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-700 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-100 shadow-sm">
                   {blog.concept}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                  {blog.title}
                </h3>
                
                {/* Excerpt from TipTap Content */}
                <p className="text-gray-200 mb-6 line-clamp-3 leading-relaxed text-sm">
                  {blog.description ? extractTextFromTipTap(blog.description) : 'No description available.'}
                </p>

                {/* Read More Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    Recent
                  </span>
                  
                  <Link 
                    href={blog.link || `/blogs/${blog.id}`}
                    className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg font-semibold text-sm"
                  >
                    Read More
                    <svg 
                      className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

       <div>
        <div className="text-center mt-12">
          <Link 
            href="/blogs"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
          >
            View All Blogs
          </Link>
        </div>
       
      </div>
       
      </div>
    </section>
  );
}