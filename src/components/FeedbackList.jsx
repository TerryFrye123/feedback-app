import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

// eslint-disable-next-line no-empty-pattern
function FeedbackList({}) {
	const { feedback } = useContext(FeedbackContext)

	if (!feedback || feedback.length === 0) {
		return <p>No feedback data</p>
	}

	return (
		<div className="feedback-list">
			{feedback.map((item) => (
				<FeedbackItem key={item.id} item={item} />
			))}
		</div>
	)
}

// FeedbackList.propTypes = {
// 	feedback: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number.isRequired,
// 			text: PropTypes.string.isRequired,
// 			rating: PropTypes.number.isRequired,
// 		})
// 	),
// }

export default FeedbackList
