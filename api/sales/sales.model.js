const mongoose = require('mongoose');
const schema = mongoose.Schema;

const operatorSchema = new schema({
    billNo: { type: String },
    billDate: { type: Date, default:Date.now },
    product: { type: schema.Types.ObjectId,ref:"product" },
    quantity: { type: Number, default:1 },
    weight: { type: Number, default:0.0 },
    wastage: { type: Number, default:0.0 },
    makingCharge: { type: Number, default:0.0 },
    otherCharge: { type: Number, default:0.0 },    
    updatedBy: { type: schema.Types.ObjectId, ref: "operator" },
    cancelled: { type: String, enum: ["Y", "N"], default:"N" },    
    cancelledDate: { type: Date},
    CancelledBy: { type: schema.Types.ObjectId, ref: "operator" },
    description:{type:String},
    domain:{type:String}
})

operatorSchema.index({ billNo: 1 });

mongoose.model("sales", operatorSchema);
