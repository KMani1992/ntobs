const mongoose = require('mongoose');
const schema = mongoose.Schema;

const parameterSchema = new schema({
    name: { type: String },
    type: { type: String, enum: ["text", "number","date"], default: "text" },
    value: { type: String},
    status: { type: String, enum: ["active", "inactive", "locked"],default:"active" },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    updatedBy: { type: schema.Types.ObjectId, ref: "operator" },
    domain:{type:String}
})

const parameterRefSchema=new schema({
    name: { type: String },
    type: { type: String, enum: ["text", "number","date"], default: "text" },
    value: { type: String},
    status: { type: String, enum: ["active", "inactive", "locked"],default:"active" },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    updatedBy: { type: schema.Types.ObjectId, ref: "operator" },
    domain:{type:String}
})

parameterSchema.pre('save', function (next) {
    this.constructor.findOne(
        { $and: [{ domain: this.domain },
        { name: this.name }]}, (err, res) => {

            if (err) {
                next(err);
                return;
            }

            if (res) {
                const error = new Error();
                error.name = 'DUP_PARAM';
                next(error);
                return;
            }

            next();

        });
})

parameterSchema.index({ name: 1 });
parameterRefSchema.index({ name: 1 });

mongoose.model("parameter", parameterSchema);
mongoose.model("parameterRef", parameterRefSchema);
