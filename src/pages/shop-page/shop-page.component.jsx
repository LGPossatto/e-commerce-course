import React from "react";
import SHOP_DATA from "./shop.data";
import CollectioPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return (
            <CollectioPreview
              key={id}
              {...otherCollectionProps}
            ></CollectioPreview>
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
