import Item from './Item';

const Feed = ({title}) => (
  <div className="mx-auto bg-gray-50 pb-2 px-1 lg:pt-8 lg:pb-28 bg-gray-500">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-3xl font-bold">{title}</h2>
      <div className="m-6 grid gap-12 max-w-lg mx-auto md:grid-cols-2 md:max-w-none lg:grid-cols-3 lg:max-w-none">
        <Item
          title="Hemp Extract Softgels"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam ducimus quibusdam esse ratione totam hic quod quidem. Omnis quibusdam aperiam quasi pariatur odio, cum eum quis voluptatum. Velit, aliquid?"
          price="65.00"
          categoryLink="/products/cbd"
          categoryType="cbd"
          label="Best Seller"
        />
        <Item
          title="Fresh Peppermint"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam ducimus quibusdam esse ratione totam hic quod quidem. Omnis quibusdam aperiam quasi pariatur odio, cum eum quis voluptatum. Velit, aliquid?"
          price="65.00"
          categoryLink="/products/cbd"
          categoryType="cbd"
          label="Best Seller"
        />
        <Item
          title="Gummy Rings"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam ducimus quibusdam esse ratione totam hic quod quidem. Omnis quibusdam aperiam quasi pariatur odio, cum eum quis voluptatum. Velit, aliquid?"
          price="65.00"
          categoryLink="/products/cbd"
          categoryType="cbd"
          label="Best Seller"
        />
        
      </div>
    </div>
  </div>
)

export default Feed;