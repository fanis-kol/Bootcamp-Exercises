import { it } from "@jest/globals";
import { describe } from "yargs";
import{ forgotPass} from "./forgotPass";

describe("forgotPass()", () =>{
    it("shoyld return true," () => {
        //texting a boolean
        expect(forgotPass());
    }
}