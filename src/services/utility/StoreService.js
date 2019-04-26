import {RUNNING_TESTS} from "../../util/TestingHelper";
let STORE;

/***
 * This is a helper service which returns the store
 * but allows for testing suites to be run without vuex
 */
export default class StoreService {

	static init(){
		STORE = RUNNING_TESTS ? {} : require("../../store/store").store;
	}

	static get(){
		return STORE;
	}

}