class BlogCard {
    constructor(img, texto, autor) {
        this._img = img;
        this._texto = texto;
        this._autor = autor;
    }
    get img() {
        return this._img;
    }
    get texto() {
        return this._texto;
    }
    get autor() {
        return this._autor;
    }
}

module.exports = BlogCard;