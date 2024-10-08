import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Layout } from '@/components/Layout';
import { parse, format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Blog {
  slug: string;
  title: string;
  date: string;
  subtitle: string;
}

const BlogIndex = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <Layout>
      <div className="min-h-screen bg-lightser p-8">
        <h1 className="text-4xl font-bold text-darkser text-center mb-8">Blog</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="block p-6 bg-white shadow-md rounded-lg hover:bg-ser hover:text-white transition-all duration-200"
            >
              <h2 className="text-2xl font-semibold text-darkser hover:text-white mb-2 transition-all duration-200">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-500 hover:text-white transition-all duration-200">
                {format(parse(blog.date, 'd/M/yyyy', new Date()), 'dd/MM/yyyy', { locale: es })}
              </p>
              <p className="text-sm text-ser hover:text-white transition-all duration-200">{blog.subtitle}</p>
            </Link>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  // Ruta hacia el archivo blogs.json
  const filePath = path.join(process.cwd(), 'pages', 'blog', 'blogs.json');

  // Leer el contenido del archivo blogs.json
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(jsonData); // Parsear el JSON para convertirlo en un array de objetos

  return {
    props: {
      blogs, // Pasar el array de blogs como props
    },
  };
};

export default BlogIndex;
