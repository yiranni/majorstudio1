import React from 'react';
import { VIEW } from '../App';
import moment from 'moment';
import { APP_COLOR } from './HeaderBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const SingleDateView = ({ view, setView, objIdx, setObjIdx, data }) => {
	let curr = data[objIdx];
	let date = moment().dayOfYear(objIdx);

	let dataAs365 = [];
	data.forEach((d, i) => {
		if (i < 365) {
			dataAs365.push(d);
		}
	});

	let width = window.innerWidth / 5;

	return <>
		{/** THE IMAGE */}
		<div className="absolute-full" style={{
			backgroundImage: `url("${curr.primaryImageSmall}")`,
			backgroundPosition: "center center",
			backgroundRepeat: 'no-repeat',
			backgroundSize: "cover",
			zIndex: 1
		}}>
		</div>

		{/** SINGLE DATE VIEW */}
		<div className={`absolute-full ${view === VIEW.SINGLE_DATE ? "unhid" : "hid"} fading`} style={{
			backgroundColor: "rgb(0,0,0,0.8)",
			zIndex: 2
		}} >
			<div className="absolute-full" style={{
				height: '100vh',
				width: '100vw',
				position: 'fixed',
				fontSize: '30vh',
				lineHeight: '100vh',
				textAlign: 'center',
				color: APP_COLOR
			}}>{date.date()}
			</div>
			<div style={{
				position: 'fixed',
				bottom: 20,
				color: APP_COLOR,
				marginLeft: 20
			}}>
				<h1 style={{fontSize: '24px'}}>{date.format("MMMM")}</h1>
				<h2 style={{fontSize: '20px'}}>{date.format("dddd")}</h2>
			</div>
			<div
				style={{
					position: 'fixed',
					bottom: 50,
					right: 50,
					color: APP_COLOR,
					cursor: 'pointer',
					zIndex: 4
				}} onClick={() => setView(VIEW.SINGLE_DATE_NO_NUMBER)}
			>
				<FontAwesomeIcon icon={faArrowRight} color={APP_COLOR} />

			</div>
		</div>

		{/** SINGLE DATE, NO NUMBER */}
		<div className={`absolute-full ${view === VIEW.SINGLE_DATE_NO_NUMBER ? "unhid" : "hid"} fading`}
			style={{ zIndex: 3, textAlign: 'center' }}>
			<div style={{
				height: '100vh',
				width: '10vw',
				position: 'absolute',
				left: 0,
				top: 0,
				lineHeight: '100vh',
				filter: 'drop-shadow(2px 2px 2px black)',
				cursor: 'pointer'
			}}>
				<FontAwesomeIcon icon={faChevronLeft} style={{
					textShadow: '2px 2px gray'
				}} color={"white"} size={"2x"} onClick={() => setObjIdx((objIdx - 1) % 365)} />
			</div>
			<div style={{
				height: '100vh',
				width: '10vw',
				position: 'absolute',
				right: 0,
				top: 0,
				lineHeight: '100vh',
				filter: 'drop-shadow(2px 2px 2px black)',
				cursor: 'pointer'
			}}>
				<FontAwesomeIcon icon={faChevronRight} style={{
					textShadow: '2px 2px gray'
				}} color={"white"} size={"2x"} onClick={() => setObjIdx((objIdx + 1) % 365)} />
			</div>
			<div
				style={{
					position: 'fixed',
					paddingTop: 20,
					paddingBottom: 20,
					bottom: 0,
					color: 'white',
					backgroundColor: 'rgb(0,0,0,0.3)',
					width: '100vw'
				}}
				onClick={() => setView(VIEW.DESCRIPTION_OPEN)}
			>
				<h1 style={{fontSize: '24px'}}>{curr.title}</h1>
				<p>{curr.artistDisplayName}</p>
				<p>{curr.objectEndDate}</p>
			</div>
		</div>

		{/** DESCRIPTION VIEW */}
		<div className={`absolute-full ${view === VIEW.DESCRIPTION_OPEN ? "unhid" : "hid"} fading`}
			style={{ zIndex: 3, textAlign: 'center' }}>
			<div style={{
				position: 'fixed',
				paddingTop: 50,
				paddingLeft: 20,
				paddingRight: 20,
				top: 0,
				left: 0,
				color: 'white',
				backgroundColor: "rgb(0,0,0,0.7)",
				textAlign: 'left',
				width: '100vw',
				height: '100vh'
			}}>
				<h1 style={{fontSize: '24px'}}>{curr.title}</h1>
				<p style={{fontStyle: 'italic', fontWeight: 'bold'}}>{curr.objectName}</p>
				<p style={{paddingTop: '4vh'}}>Artist: {curr.artistDisplayName}</p>
				<p>Year: {curr.objectEndDate}</p>
				<p>Medium: {curr.medium}</p>
			</div>
		</div>

		{/** CALENDAR */}
		<div className={`absolute-full ${view === VIEW.CALENDAR ? "unhid" : "hid"} fading container`}
			style={{
				zIndex: 3,
				backgroundColor: "white",
				overflowY: "scroll"
			}}>
			<div className="row">
				{dataAs365.map((d, i) => {
					return <div
						className="col"
						key={d.objectID}
						style={{
							height: width,
							minWidth: width,
							backgroundImage: `${i === objIdx ? 'none' : `url(${d.primaryImageSmall})`}`,
							backgroundPosition: "center center",
							backgroundRepeat: 'no-repeat',
							backgroundSize: "cover",
							padding: 0,
							margin: 0
						}}
						onClick={() => {
							setObjIdx(i);
							setView(VIEW.SINGLE_DATE)
						}}
					>
						{i === objIdx && <div
							style={{
								lineHeight: `${width}px`,
								color: APP_COLOR,
								minWidth: width,
								fontWeight: 'bold',
								textAlign: 'center'
							}}>
							{`${date.format("MMM")} ${date.date()}`}
						</div>}
					</div>
				})}
			</div>
		</div>
	</>
}