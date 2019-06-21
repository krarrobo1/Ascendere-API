import { Document, Schema, model } from 'mongoose';

/**
 * @class containing all the information related to this event,
 */
export class Encuentro {
  /**
   * @property name of the event
   */
  name: string;

  /**
   * @property content of the event in markdown text format.
   */
  content: string;

  /**
   * @property art designed for this event.
   */
  arts: EncuentrosArts;

  /**
   * @property date when the even will take place
   */
  date: Date;

  /**
   * @property date when postulation will be closed.
   */
  postulationsEndDate: Date;

  /**
   * @property number of person that can postulate to this event.
   */
  limitOfPeople: number;

  /**
   * @property speakers who are going to drive the event, this can also be a teacher or student.
   */
  speakers: Array<Speaker | User>;
}

class EncuentrosArts {
  /**
   * @property low resolution image used to be displayed on mobile phone
   */
  mobile: string;

  /**
   * @property image used for metadata in social media like: Facebook, Twitter and SEO
   */
  social: string;

  /**
   * @property high resolution image banner of the event
   */
  banner: string;

  /**
   * @property large image
   */
  slider: string;
}

/**
 * TODO: remove this dummy class
 */
class User {}

/**
 * @class Special person to talk in a event which is neither a student or teacher.
 * And the information must be stored only for this talk.
 *
 * If recurrent speaker, a user should be created
 */
class Speaker {

  /**
   * @property ci or passport of Speaker
   */
  identifier: string;

  /**
   * @property speaker name with lastName
   */
  name: string;

  /**
   * @property speaker cv or resume
   */
  resume: string;

  /**
   * @property linkedIn account
   */
  linkedIn: string;

  /**
   * @property mail of the speaker
   */
  email: string;
}

// no necessary to export the schema (keep it private to the module)
var schema = new Schema({
  mail: { required: true, type: String },
  name: { required: false, type: String }
});
// register each method at schema
schema.method('foo', User.prototype.foo);

// 2) Document
export interface EncuentroDocument extends User, Document {}

// 3) MODEL
export const EncuentroModel = model<UserDocument>('User', schema);
