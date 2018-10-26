const mongoose = require('mongoose');
const schema = mongoose.Schema;

const salesSchema = new schema({
    billNo: { type: String },
    billDate: { type: Date, default:Date.now },    
    product: { type: schema.Types.ObjectId,ref:"product" },
    metal: { type: String },
    category: { type: String },
    type: { type: String },
    quantity: { type: Number, default:1 },
    weight: { type: Number, default:0.0 },    
    wastageType: { type: String },
    wastage: { type: Number, default:0.0 },
    mcType: { type: String },
    makingCharge: { type: Number, default:0.0 },    
    otherCharge: { type: Number, default:0.0 },    
    description: { type: String },
    tax: { type: Number, default:0.0 },    
    rate: { type: Number, default:0.0 },    
    netVal: { type: Number, default:0.0 },    
    mcVal: { type: Number, default:0.0 },    
    wasVal: { type: Number, default:0.0 },    
    ocVal: { type: Number, default:0.0 },    
    taxVal: { type: Number, default:0.0 },    
    grosVal: { type: Number, default:0.0 },    
    saleTax: { type: Number, default:0.0 },    
    saleBillAmt: { type: Number, default:0.0 },    
    saleQuantity: { type: Number, default:0.0 }, 
    saleWeight  : { type: Number, default:0.0 },     
    updatedBy: { type: schema.Types.ObjectId, ref: "operator" },
    cancelled: { type: String, enum: ["Y", "N"], default:"N" },    
    cancelledDate: { type: Date},
    CancelledBy: { type: schema.Types.ObjectId, ref: "operator" },
    CancelledDescription:{type:String},
    domain:{type:String}
})

salesSchema.index({ billNo: 1 });

mongoose.model("sales", salesSchema);
