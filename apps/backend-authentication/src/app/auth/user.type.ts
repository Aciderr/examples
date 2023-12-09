import {auth} from "firebase-admin";
import DecodedIdToken = auth.DecodedIdToken;

export type User = DecodedIdToken;
