export default class Likes {
    constructor() {
        this.Likes = [];
    }

    addLike(id, title, author, img) {
       const like = {
            id, 
            title, 
            author, 
            img 
        }
    }
    
    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }
}