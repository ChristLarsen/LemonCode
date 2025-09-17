import { mapCredentialsFromVMToApi } from "./login.mapper";
import * as apiModel from './api/login.api-model';
import * as viewModel from './login.vm';

describe("login.mapper specs", () => {

    it("Should return a credential with same properties", () => {

        // Arrange
        const vmCredentials : viewModel.Credentials = {
            user : "myuser",
            password : "mypassword"
        };
        const expectedApiCredentials : apiModel.Credentials = {
            user : "myuser",
            password : "mypassword"
        };

        // Act
        const result : apiModel.Credentials = 
            mapCredentialsFromVMToApi(vmCredentials);

        // Assert
        expect(result).toEqual(expectedApiCredentials);

    });

});