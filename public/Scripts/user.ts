namespace core
{

    export class User
    {
        //TODO: missing Getters and Setters
        private m_displayName: string;
        private m_emailAddress: string;
        private m_username: string;
        private m_password: string;

        // getters and setters
        get DisplayName(): string
        {
            return this.m_displayName;
        }
        
        set DisplayName(name: string)
        {
            this.m_displayName = name;
        }

        get EmailAddress(): string
        {
            return this.m_emailAddress;
        }

        set EmailAddress(email_address: string)
        {
            this.m_emailAddress = email_address;
        }

        get Username(): string
        {
            return this.m_username;
        }

        set Username(username: string)
        {
            this.m_username = username;
        }

        get Password(): string
        {
            return this.m_password;
        }

        set Password(password: string)
        {
            this.m_password = password;
        }

        
        //constructor
        constructor(displayName: string = "", emailAddress: string = "", username: string = "", password: string = "")
        {
            this.m_displayName = displayName;
            this.m_emailAddress = emailAddress;
            this.m_username = username;
            this.m_password = password;
        }

        //overriden methods
        /**
         * This method overrides the build in toString method and returns a comma-separated string containing the objects property value
         * @override
         * @return {string} 
         * @memberof User
         */
        toString(): string
        {
            return `Display Name : ${this.DisplayName}\nEmail Address : ${this.EmailAddress}\nUsername : ${this.Username}`;
        }

        //utility methods
        //TODO: need to fix the Return type
        /**
         *
         *
         * @return {{ DisplayName: string, EmailAddress: string, Username: string}}
         * @memberof User
         */
        toJSON(): { DisplayName: string, EmailAddress: string, Username: string}
        {
            return {
                "DisplayName": this.DisplayName,
                "EmailAddress": this.EmailAddress,
                "Username": this.Username
            }
        }

        //TODO: need to fix the parameter data type
        fromJSON(data: any)
        {
            this.DisplayName = data.DisplayName;
            this.EmailAddress = data.EmailAddress;
            this.Username = data.Username;
            this.Password = data.Password;
        }

        /**
         * This mehtod converts the objects properties into a comma-seperated string
         *
         * @return {(string | null)}
         */
        serialize(): string | null
        {
            if(this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "")
            {
                return `${this.DisplayName},${this.EmailAddress},${this.Username}`;
            }
            else
            {
                console.error("One or more properties of the User Object are missing or invalid");
                return null;
            }
        }

        /**
         * This method separates the data string parameter into the object's properties
         *
         * @param {string} data
         * @returns {void}
         */
        deserialize(data: string) // assume that data is a comma-separated list of properties (strings)
        {
            let propertyArray: string[] = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.Username = propertyArray[2];
        }
    }

}