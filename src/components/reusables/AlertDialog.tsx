import { useState } from 'react';
import {
	AlertDialogDescription,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogCancel,
	AlertDialogFooter,
	AlertDialogAction,
	AlertDialogTitle,
	AlertDialog,
} from '@/components/ui/alert-dialog';

export default function AlertDialogComponent({
	description,
	onClicked,
	title,
}: {
	onClicked: () => void;
	description: string;
	title: string;
}) {
	const [showModal, setModal] = useState(true);

	const handleContinue = () => {
		setModal(false);
		onClicked();
	};

	const handleCancel = () => {
		setModal(false);
		onClicked();
	};
	return (
		<AlertDialog open={showModal}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={handleContinue}>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
