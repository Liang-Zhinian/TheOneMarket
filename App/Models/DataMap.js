
import { ItemModel } from './Item.js'

function mapItemsData(data) {
    let allItems = [];
    data.map(item => {
        let itemModel = new ItemModel(item.id);
        itemModel.setItemData(item)
        itemModel.title = item.name;
        itemModel.item_featured = item.featured;
        // itemModel.owner,
        // itemModel.total_likes,
        // itemModel.like,
        // itemModel.onLikeItem,
        // itemModel.owner_image,
        // itemModel.item,
        // itemModel.item_id,
        // itemModel.owner_id

        allItems.push(itemModel);
    })


    return allItems;
}

function mapItemData(origin, newData) {
    // console.log('DataMap mapItemData => ', newData)
    // let item = {
    //     category: '',
    //     category_id: '',
    //     created_date: '',
    //     description: '',
    //     expiry_end: '',
    //     expiry_start: '',
    //     id: '',
    //     images: '',
    //     item_condition: '',
    //     item_featured: '',
    //     owner: '',
    //     owner_id: '',
    //     price: '',
    //     short_desc: '',
    //     status: '',
    //     status_lang: '',
    //     title: '',
    //     type: '',
    //     type_id: '',
    //     like: 0,
    //     wishlist: 0,
    //     owner_rate: 0,
    //     total_likes: 0,
    //     owner_image: null,
    //     follow: false,
    //     isLiked: false,
    //     isWished: false,
    //     owner_mobile: '',
    //     slug: '',
    //     owner_enable_call: 0
    // };

    // var item = new ItemModel(data.id);
    console.log('DataMap mapItemData before => ', newData)

    Object.keys(newData).map(key => {
        origin[key] = newData[key]
    })

    origin.title = newData.name;
    origin.item_featured = newData.featured;
    origin.images = mapImagesData(newData.images)
    origin.category = newData.categories[0].name;
    origin.category_id = newData.categories[0].id;
    origin.created_date = newData.date_created;

    console.log('DataMap mapItemData after => ', origin)
    return origin;
}

function mapImagesData(data) {
    console.log('DataMap mapImagesData => ', data)
    let allImages = [];
    if (!data || data.length == 0) return allImages;

    data.map(item => {
        item.link = item.src;
        allImages.push(item)
    })

    return allImages;
}

function mapCategoriesData(data) {
    let allCategories = [];
    data.map(item => {
        item.title = item.name;
        allCategories.push(item)
    })

    return allCategories;
}

export default {
    mapItemsData,
    mapItemData,
    mapImagesData,
    mapCategoriesData,

}