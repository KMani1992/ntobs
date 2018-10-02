const mongoose = require('mongoose');

const schema = mongoose.Schema;

const companySchema = new schema({

    domain: {
        type: String,
        match: [/^[a-zA-Z']{1,}[\ ]{0,1}[a-zA-Z']{0,}$/, "DomainName should not allow special characters"],
        validate: [function (domainName) {
            return domainName.length <= 120;
        }, 'DomainName length must be less than 120 characters']
    },
    name: {
        type: String,
        validate:[function(name){
            return name.length<=30
        },'CompanyName must be lessthan 30 characters']

    },
    key: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'locked'],
        default: 'inactive',
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
    operator: {
        type: schema.Types.ObjectId,        
        ref: 'operator'
    }
});


companySchema.pre('save', function(next) {
    this.constructor.findOne(
        { domain: this.domain }, (err,res) => {

            if (err) {
                next(err);
                return;
            }

            if (res) {
                const error=new Error();
                error.name='DUP_DOMAIN';
                next(error);
                return;
            }

            next();

        });
})




companySchema.index({ domain: 1 });

mongoose.model('company', companySchema);


