import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faBookOpen, faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
import { VIEW } from '../App';

export const APP_COLOR = "rgb(226,171,89)"

export const HeaderBar = ({
	view, setView
}) => {
	return <>
		<div className="navbar navbar-expand-sm container">
			<div className="row w-100 centered">
				<div className="col-4">

					{view === VIEW.SINGLE_DATE_NO_NUMBER &&
						<FontAwesomeIcon icon={faArrowLeft} color={"white"} onClick={() => setView(VIEW.SINGLE_DATE)} />
					}
				</div>
				<div className="col-4 centered">
					{view === VIEW.SINGLE_DATE &&
						<FontAwesomeIcon icon={faCalendarAlt} color={APP_COLOR} onClick={() => setView(VIEW.CALENDAR)} />
					}
					{view === VIEW.SINGLE_DATE_NO_NUMBER &&
						<FontAwesomeIcon icon={faCalendarAlt} color={"white"} onClick={() => setView(VIEW.CALENDAR)} />
					}
				</div>
				<div className="col-4 right-aligned">
					{view === VIEW.DESCRIPTION_OPEN &&
						<FontAwesomeIcon icon={faTimes} color={APP_COLOR} onClick={() => setView(VIEW.SINGLE_DATE_NO_NUMBER)} />
					}
					{view === VIEW.CALENDAR &&
						<FontAwesomeIcon icon={faTimes} color={APP_COLOR} onClick={() => setView(VIEW.SINGLE_DATE)} />
					}
				</div>

			</div>
		</div>
	</>
}