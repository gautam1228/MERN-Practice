const z = require("zod");

const createToDoSchema = z.object({
    title : z.string(),
    description : z.string()
});

const updateToDoSchema = z.object({
    id : z.string()
});

module.exports = {
    createToDoSchema,
    updateToDoSchema
}