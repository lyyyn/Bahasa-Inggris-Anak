const db = require('../db');

module.exports = {
    async getAll () {
        try {
            return await db.guru.find().sort( { UpdatedDate: -1, CreatedDate: -1 } ).toArray();
        } catch (err) {
            throw new Error(`Database Error - <%=item.Title%>${err.message}`);
        }
    },
    async show (title) {
        const item = await db.guru.findOne({ title: { '$regex': `^${title}$`, '$options': 'i' } });
        if (!item) throw new Error('Non-existance');
        return item;
    },
    async create (item) {
        try {
            const { insertedCount } = await db.guru.insertOne(item);
            if (!insertedCount) throw new Error('insertion failure');
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
        }
    },
    async getOneBytitle (title) {
        const foundItem = await db.guru.findOne(
            {
                title: {
                    '$regex': `^${title}$`,
                    '$options': 'i'
                }
            }
        );
        if (!foundItem) throw new Error(`Item with title '${title}' does not exist`);
        return foundItem;
    },
    async updateBytitle (title, item) {
        try {
            const { matchedCount } = await db.guru.updateOne({
                title: {
                    '$regex': `^${title}$`,
                    '$options': 'i'
                }
            }, {
                $set: item
            });
            if (!matchedCount) throw new Error(`${title} doesn't exist`);
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, I cannot update it with ${JSON.stringify(item)}`);
        }
    }
};