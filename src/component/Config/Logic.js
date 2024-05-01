export const isPresentInFavorites = (favorites, restaurant) => {
    console.log("Restaurant ID:", restaurant.id);
    for (let item of favorites) {
        console.log("Favorite ID:", item.id);
        if (restaurant.id === item.id) {
            return true;
        }
    }
    return false;
}