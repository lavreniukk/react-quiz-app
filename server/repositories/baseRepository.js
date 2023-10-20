class BaseRepository {
    constructor(collection) {
        this.collection = collection;
    }

    async getAll() {
        try {
            return await this.collection.find();
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try {
            return await this.collection.findById(id).exec();
        } catch (error) {
            throw error;
        }
    }

    async create(data) {
        try {
            const newDocument = new this.collection(data);
            return await newDocument.save();
        } catch (error) {
            throw error;
        }
    }

    async update(newData, id) {
        try {
            return await this.collection.findByIdAndUpdate(id, newData)
        } catch (error) {
            throw error
        }
    }

    async delete(id) {
        try {
            return await this.collection.findByIdAndRemove(id).exec()
        } catch (error) {
            throw error
        }
    }
}

export default BaseRepository;