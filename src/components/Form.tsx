import React from 'react';
import './../App.scss';

interface IFormProps {
    /* The http path that the form will be posted to */
    url: string;

    /* A prop which allows content to be injected */
    render: () => React.ReactNode;
}

export interface IValues {
    /* Key value pairs for all the field values with key being the field name */
    [key: string]: any;
}

export interface IErrors {
    /* The validation error messages for each field - key is the field name */
    [key: string]: string;
}

export interface IFormState {
    /* The field values */
    values: IValues;
  
    /* The field validation error messages */
    errors: IErrors;
  
    /* Whether the form has been successfully submitted */
    submitSuccess?: boolean;
}

export class Form extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
    
        const errors: IErrors = {};
        const values: IValues = {};

        this.state = { errors, values };
    }

    /**
     * Returns whether there are any errors in the errors object that is passed in
     * @param {IErrors} errors - The field errors
     */
    private haveErrors(errors: IErrors) {
        let haveError: boolean = false;

        // eslint-disable-next-line array-callback-return
        Object.keys(errors).map((key: string) => {
            if (errors[key].length > 0) {
                haveError = true;
            }
        });

        return haveError;
    }

    /**
     * Handles form submission
     * @param {React.FormEvent<HTMLFormElement>} event - The form event
     */
    private handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault(); // This prevent webpage scrolling back to the top.

        if (this.validateForm()) {
            const submitSuccess: boolean = await this.submitForm();
            this.setState({ submitSuccess });
        }
    };

    /**
     * Executes the validation rules for all the fields on the form and sets the error state
     * @returns {boolean} - Whether the form is valid or not
     */
    private validateForm(): boolean {
        // TODO - validate form
        return true;
    }

    /**
     * Submits the form to the http api
     * @returns {boolean} - Whether the form submission was successful or not
     */
    private async submitForm(): Promise<boolean> {
        try {
          const response = await fetch(this.props.url, {
            method: "post",
            headers: new Headers({
              "Content-Type": "application/json",
              Accept: "application/json"
            }),
            body: JSON.stringify(this.state.values)
          })
          return response.ok;
        } catch (ex) {
          return false;
        }
    }

    public render() {
        const { submitSuccess, errors } = this.state;
        return (
        <form onSubmit={this.handleSubmit} noValidate={true}>
            <div className="container">
                {this.props.render()}
                <div className="form-group">
                    <button type="submit" 
                            className="btn btn-primary" 
                            disabled={this.haveErrors(errors)}>
                            Generate Report
                    </button>
                </div>
                {/* Success */}
                {submitSuccess && (
                    <div className="alert alert-info" role="alert">
                        Form successfully submitted!
                    </div>
                )}
                {/* Failed - Unexpected Error */}
                {submitSuccess === false &&
                    !this.haveErrors(errors) && (
                    <div className="alert alert-danger" role="alert">
                        Unexpected error has occurred!
                    </div>
                )}
                {/* Failed - Invalid Form */}
                {submitSuccess === false &&
                    this.haveErrors(errors) && (
                    <div className="alert alert-danger" role="alert">
                        Form Invalid. Please review and try again!
                    </div>
                )}
            </div>
        </form>
        );
    }
}

export default Form;
