import { Document, Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { Timestamp } from 'bson';

/**
 * TODO: add documentation
 */
/*export class User {
  createdAt: Date;
  displayName: String;
  email: String;
  emailVerified: Boolean;
  isAnonymous: Boolean;
  lastLoginAt: Date;
  phoneNumber: number;
  photoUrl: String;
  providerData: Array<ProviderData>;
}*/
export class User extends Document {
  name: string;
  lastName: string;
  birthDate?: Date;
  state: boolean;
  nationality: string;
  ci: string;
  email: string;
  phoneNumber?: number;
  img: string;
  role: string;
  createdAt: Date;
  lastLoginAt: Date;
}

const rolesPermitidos: String[] = ['USER_ROLE', 'ADMIN_ROLE', 'DOCENTE_ROLE'];

export class ProviderData {} // Cuentas

let schema = new Schema(
  {
    name: { type: String, required: [true, 'Name required'] },
    lastName: { type: String, required: [true, 'Last name required'] },
    birthDate: { type: Date, required: false },
    state: { type: Boolean, required: false, default: true },
    nationality: { type: String, required: false },
    ci: { type: String, required: [true, 'CI required'] },
    email: { type: String, required: [true, 'Email required'], unique: true },
    phoneNumber: { type: Number, required: false },
    img: { type: String, required: false },
    lastLoginAt: { type: Date, required: false },
    role: { type: String, enum: rolesPermitidos, default: 'USER_ROLE' }
  },
  { timestamps: true }
);

schema.plugin(uniqueValidator, { message: '{PATH} must be unique' });
/*let schema = new Schema({
  encuentroID: { required: true, type: Schema.Types.ObjectId },
  userID: { required: true, type: Schema.Types.ObjectId },
  inscriptionDate: { required: true, type: Date, default: Date.now() },
  inscriptionApproved: { required: true, type: Boolean, default: false }
});*/

/**
 * TODO: add documentation
 */
export interface UserDocument extends User, Document {}

/**
 * TODO: add documentation
 */
export const UserModel = model<UserDocument>('User', schema);
