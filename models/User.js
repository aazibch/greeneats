const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const { generateValidationMessage } = require('@/lib/utils');

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, generateValidationMessage('required', 'full name')],
      maxlength: [50, generateValidationMessage('max', 'full name', 50)],
      minlength: [5, generateValidationMessage('min', 'full name', 5)],
      validate: {
        validator: function (val) {
          return /^[a-zA-Z ]*$/.test(val);
        },
        message:
          'The full name may only contain alphabets (letters A-Z) and spaces.'
      }
    },
    username: {
      type: String,
      required: [true, generateValidationMessage('required', 'username')],
      maxlength: [50, generateValidationMessage('max', 'username', 50)],
      minlength: [3, generateValidationMessage('min', 'username', 3)],
      validate: {
        validator: function (val) {
          return /^[a-zA-Z0-9_]*$/.test(val);
        },
        message:
          'The username may only contain alphanumeric characters (letters A-Z, numbers 0-9) and underscores (_).'
      }
    },
    email: {
      type: String,
      required: [true, generateValidationMessage('required', 'email address')],
      validate: [validator.isEmail, generateValidationMessage('email')],
      unique: true,
      maxlength: [50, generateValidationMessage('max', 'email address', 50)],
      minlength: [5, generateValidationMessage('min', 'email address', 5)]
    },
    password: {
      type: String,
      required: [true, generateValidationMessage('required', 'password')],
      minlength: [8, generateValidationMessage('min', 'password', 8)],
      select: false
    },
    passwordChangeDate: Date
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isNew) return next();

  this.username = this.username.toLowerCase();

  next();
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangeDate = new Date(Date.now() - 1000);
  next();
});

userSchema.methods.isPasswordCorrect = async function (
  inputPass,
  encryptedPass
) {
  return await bcrypt.compare(inputPass, encryptedPass);
};

userSchema.methods.changedPasswordAfterToken = function (
  tokenIssuanceTimestamp
) {
  if (this.passwordChangeDate) {
    const passwordChangeTimestamp = this.passwordChangeDate.getTime() / 1000;

    return tokenIssuanceTimestamp < passwordChangeTimestamp;
  }

  return false;
};

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
