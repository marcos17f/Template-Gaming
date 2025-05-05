import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import blog_data from "@/data/blog-data";
import BreadcrumbAreaThree from "../../components/breadcrumb/breadcrumb-area-3";
import BlogDetailsArea from "../../components/blog-details/blog-details-area";

export const metadata: Metadata = {
  title: "Blog Details Page",
};

type IParams = Promise<{ id: string }>;
export default async function BlogDetailsPage({params}:{params: IParams}) {
  const { id } = await params;
  const blog = blog_data.find((b) => Number(b.id) === Number(id));
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbAreaThree title="BLOG DETAILS" subtitle="BLOG DETAILS" />
        {/* breadcrumb area end */}

        {/* blog area start */}
        {blog ? (
          <BlogDetailsArea blog={blog} />
        ) : (
          <h2 className="text-center mt-100">Blog not found</h2>
        )}
        {/* blog area end */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
