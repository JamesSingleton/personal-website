

const Item = ({ img = "", title = "", desc = "", price = "0", productLink = "",
categoryLink="", categoryType="", label="" }) => (
  <div className="flex flex-col shadow-lg overflow-hidden relative">
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm leading-5 font-medium text-indigo-600 uppercase tracking-wide text-sm text-indigo-600 font-bold">
          <a href={categoryLink} className="hover:underline">
            {categoryType}
            </a>
        </p>
        <a href={productLink} className="block">
          <h2 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {title}
          </h2>
          <p className="mt-2 text-base leading-6 text-gray-700">{desc}</p>
        </a>
      </div>
      <div className="mt-4 text-xl leading-none font-extrabold text-gray-900">
        <span>${price}</span>
      </div>
    </div>
  </div>
);

export default Item;