import Image from 'next/image'
export default function Gallery() {
  return (
    <div>
      <div className=" mx-auto w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex justify-center -mt-16 md:justify-end">
          <Image
            className=" object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
            alt="Testimonial avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </div>

        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
          Why flowers
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-200">
          
          Plain and simple, flowers are beautiful and give feelings of hope,
          love, vibrancy, life, the joy of spring and so much more. The range
          and contrast of colors in flowers lead to wonderful shots. When I
          decide to take a picture of a flower, I usually have to be in the
          right place at the right time. The flower has to be in bloom, and I
          have to be able to get close enough without trampling on it.
        </p>

        <div className="flex justify-end mt-4">
          <a
            href="#"
            className="text-xl font-medium text-blue-600 dark:text-blue-300"
            tabindex="0"
            role="link"
          >
            collins Tonui
          </a>
        </div>
      </div>
    </div>
  );
}
