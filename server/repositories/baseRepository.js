class BaseRepository {
    constructor(collection) {
        this.collection = collection;
    }

    async getAll() {
        return await this.collection.find();
    }

    async getById(id) {
        return await this.collection.findById(id).exec();
    }

    async create(data) {
        const newDocument = new this.collection(data);
        return await newDocument.save();
    }

    async update(newData, id) {
        return await this.collection.findByIdAndUpdate(id, newData, {new: true});
    }

    async delete(id) {
        return await this.collection.findByIdAndRemove(id).exec();
    }
}

export default BaseRepository;