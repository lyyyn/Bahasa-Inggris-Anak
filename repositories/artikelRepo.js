const db = require('../db');

module.exports = {
    async getAll() {
        try {
            return await db.artikel.find().sort({  UpdatedDate: -1}).toArray();
        } catch (err) {
            throw new Error(`Database Error - <%=item.Title%>${err.message}`);
        }
    },
    async show(title) {
        const item = await db.artikel.findOne({ title: { '$regex': `^${title}$`, '$options': 'i' } });
        if (!item) throw new Error('Non-existance');
        return item;
    },
    async create(item) {
        try {
            const { insertedCount } = await db.artikel.insertOne(item);
            if (!insertedCount) throw new Error('insertion failure');
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
        }
    },
    async getOneByID(idx) {
        const ObjectId = require('mongodb').ObjectId;
        const o_id = new ObjectId(idx); // convert to ObjectId
        const foundItem = await db.artikel.findOne({
            _id: o_id
        });
        if (!foundItem) throw new Error(`Item with _id '${idx}' does not exist`);
        return foundItem;
    },
    async updateByID(idx, item) {
        const ObjectId = require('mongodb').ObjectId;
        const o_id = new ObjectId(idx); // convert to ObjectId
        try {
            const { matchedCount } = await db.artikel.updateOne({
                _id: o_id
            }, {
                $set: item
            });
            if (!matchedCount) throw new Error(`${idx} doesn't exist`);
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, I cannot update it with ${JSON.stringify(item)}`);
        }
    },
    async deleteByID(idx) {
        const ObjectId = require('mongodb').ObjectId;
        const o_id = new ObjectId(idx); // convert to ObjectId
        await db.artikel.deleteOne({
            _id: o_id
        });
    }
};