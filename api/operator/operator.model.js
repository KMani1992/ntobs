const mongoose = require('mongoose');
const schema = mongoose.Schema;

const operatorSchema = new schema({
    name: { type: String },
    loginId: { type: String },
    password: { type: String },
    type: { type: String, enum: ["admin", "user"], default: "user" },
    authType: { type: String, enum: ["local", "google"], default: "local" },
    status: { type: String, enum: ["active", "inactive", "locked"],default:"inactive" },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    updatedBy: { type: schema.Types.ObjectId, ref: "operator" },
    domain:{type:String}
})

operatorSchema.pre('save', function (next) {
    this.constructor.findOne(
        { $and: [{ domain: this.domain },
        { loginId: this.loginId }]}, (err, res) => {

            if (err) {
                next(err);
                return;
            }

            if (res) {
                const error = new Error();
                error.name = 'DUP_LOGIN';
                next(error);
                return;
            }

            next();

        });
})

operatorSchema.index({ loginId: 1 });

mongoose.model("operator", operatorSchema);
