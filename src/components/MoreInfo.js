import React, { Component } from 'react';

class MoreInfo extends Component {
    render() {
        return (
            <div className="more-info">
                <div className="quote-and-attributed-party">
                    <h2 className="quote">
                        "...the use of 'Native American' sports mascots, logos, or
                        symbols perpetuates stereotypes of American Indians that are
                        very harmful. The 'warrior savage' myth has plagued this
                        country’s relationships with the Indian people, as it
                        reinforces the racist view that Indians are uncivilized and
                        uneducated..."
                    </h2>
                    <h2 className="attributed-party">
                      - The National Congress of American Indians
                    </h2>
                </div>
                <div className="quote-follow-up">
                    The National Congress of American Indians, Five Civilized
                    Tribes, and Navajo Nation all call for eliminating native
                    mascots. These three groups alone represent
                    <strong> millions</strong> of indigenous people.
                    <br/> <br/>
                    Want to see the full list of resolutions denouncing native
                    mascots?
                </div>
                <button>
                    Click Here
                </button>
                <div>
                  add your email to our list to keep in touch about future
                  activism events
                </div>
                <input></input>
                <button>submit email</button>
                <div>
                  Give more info about the number of indigenous tribes / orgs
                  that have expressed explicit dissaproval of sports teams with
                  mascots/logos that appropriate indigenous culture (with links
                  to further info)
                </div>
            </div>
        )
    }
}

export default MoreInfo;
