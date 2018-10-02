const mongoose = require('mongoose');
const schema = mongoose.Schema;
																							

const operatorSchema = new schema({
    name: { type: String },
    metal: { type: String },
    category: { type: String },
    type: { type: String, enum: ["rate", "weight"], default: "weight" },
    wastageType: { type: String, enum: ["percentpg", "valuepg","lumpsum"],
     default: "percentpg" },
    wastage: { type: Number },
    mcType: { type: String, enum: ["percentpg", "valuepg","lumpsum"], 
    default: "valuepg" },
    makingCharge: { type: Number,default:0.0 },
    otherCharge: { type: Number,default:0.0 },
    description: { type: String,default:"" },
    weight: { type: Number,default:0.0 },
    value: { type: Number,default:0 },    
    quantity: { type: Number,default:1 },
    status: { type: String, enum: ["active", "inactive", "locked"] },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    updatedBy: { type: schema.Types.ObjectId, ref: "operator" },
    domain:{type:String}
})

operatorSchema.pre('save', function (next) {
    this.constructor.findOne(
        { $and: [{ domain: this.domain },
        { name: this.name }]}, (err, res) => {

            if (err) {
                next(err);
                return;
            }

            if (res) {
                const error = new Error();
                error.name = 'DUP_PRODUCT';
                next(error);
                return;
            }

            next();

        });
})

operatorSchema.index({ loginId: 1 });

mongoose.model("product", operatorSchema);
