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
            const newDocument = new this.model(data);
            return await newDocument.save();
        } catch (error) {
            throw error;
        }
    }

    async update(newData, id) {
        try {
            return await this.model.findByIdAndUpdate(id, newData, )
        } catch (error) {
            throw error
        }
    }

    async delete(id) {
        try {
            return await this.model.findByIdAndRemove(id).exec()
        } catch (error) {
            throw error
        }
    }
}

export default BaseRepository;