
import styles from './card.module.scss'
import { useState, useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogProps, SelectChangeEvent } from '@mui/material';

interface Props {
	title?: string;
	img?: string;
	imgAlt?: string;
	url: string;
	tags: string;
}

export default function Card({ img, title, url, tags }: Props) {
	const [home, setHome] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [fullWidth, setFullWidth] = useState(true);
	const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm');
	
	const handleClickOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullWidth(event.target.checked);
  };

	useEffect(() => {
    if (tags.includes('mom')) setHome(true);
	}, [tags]);

	if (url) return (
		<a className={styles.Card} href={url} target="_blank" rel="noreferrer" style={{ backgroundImage: `url(${img})` }}>
			<h2 className={styles.CardTitle} >{title}</h2>
		</a>
	);
	
	return (
		<>
			<div className={styles.Card} style={{ backgroundImage: `url(${img})` }} onClick={handleClickOpen}>
				{home && <div className={styles.CardIcon}><AiFillHome /></div>}
				<h2 className={styles.CardTitle} >{title}</h2>
			</div>
			<Dialog
				fullWidth={fullWidth}
				maxWidth={maxWidth}
				open={isOpen}
				onClose={handleClose}
			>
				<div className={styles.CardImg} style={{ backgroundImage: `url(${img})` }} />
				<DialogTitle id="responsive-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Coming soon
          </DialogContentText>
        </DialogContent>
			</Dialog>
		</>
	)
}