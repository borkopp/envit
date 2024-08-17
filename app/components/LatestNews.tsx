import Image from "next/image";
import Link from "next/link";

const NewsItem = ({
  image,
  date,
  title,
  content,
}: {
  image: string;
  date: string;
  title: string;
  content: string;
}) => (
  <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
    <Image
      className="w-full h-48 object-cover mb-4"
      src={image}
      alt={title}
      width={400}
      height={200}
    />
    <p className="text-gray-600 mb-2">{date}</p>
    <h4 className="text-xl text-black font-semibold mb-2">{title}</h4>
    <p className="text-gray-700 mb-4">{content}</p>
    <Link href="#">
      <span className="inline-block bg-green-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-green-600 transition duration-300">
        View Details
      </span>
    </Link>
  </div>
);

const LatestNews = () => {
  const newsItems = [
    {
      image: "/news1.png",
      date: "28.03.2024",
      title: "News #1",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, unde accusamus. Quam a reiciendis est illo magni iste eveniet delectus assumenda animi. Iure, autem. Culpa necessitatibus dolor tenetur possimus praesentium!",
    },
    {
      image: "/news2.jpeg",
      date: "01.03.2024",
      title: "News #2",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero necessitatibus, dolorum facere velit molestiae ullam esse harum temporibus at soluta saepe animi repellat enim aliquid? Id distinctio quo est omnis!",
    },
    {
      image: "/news3.png",
      date: "24.12.2023",
      title: "News #3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti harum dolore molestiae suscipit molestias ut dicta animi? Ipsum, consectetur aut! Iste, adipisci quia ut dolore totam repellat! Quas, deserunt.",
    },
    {
      image: "/news4.png",
      date: "10.11.2023",
      title: "News #4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis cumque eligendi inventore, cum doloremque laudantium voluptatum labore itaque quas minus rerum aperiam, sit qui alias excepturi debitis omnis aut.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Latest News from All Categories
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            excepturi reiciendis eius sunt? Ab doloremque ullam similique incid
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {newsItems.map((item, index) => (
            <NewsItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
