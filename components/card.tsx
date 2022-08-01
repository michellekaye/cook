
import styles from './card.module.scss'
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { AiFillHome } from 'react-icons/ai';
import { HiExternalLink } from 'react-icons/hi';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogProps, SelectChangeEvent } from '@mui/material';
import { getStrapiMedia } from "../pages/api/media";

interface Props {
	title?: string;
	img: any;
	imgAlt?: string;
	url: string;
	tags: string[];
	ingredients?: string | undefined,
	steps?: string | undefined,
	notes?: string | undefined,
}

export default function Card({ img, title, url, tags, ingredients, steps, notes }: Props) {
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

	// useEffect(() => {
	// 	(tags.find((tag) => {
	// 		if (tag.includes('mom')) setHome(true);
	// 	}))
	// }, [tags]);
	
	useEffect(() => {
		if (tags.includes('mom')) setHome(true);
	}, [tags]);

	// const imgUrl = getStrapiMedia(img);
	const imgUrl = img;

	if (url) return (
		<>
			<div className={styles.Card} style={{ backgroundImage: `url(${imgUrl})` }} onClick={handleClickOpen}>
				{<div className={styles.CardIcon}><HiExternalLink /></div>}
				<h2 className={styles.CardTitle} >{title}</h2>
			</div>
			<Dialog
				fullWidth={fullWidth}
				maxWidth={maxWidth}
				open={isOpen}
				onClose={handleClose}
			>
				<div className={styles.CardImg} style={{ backgroundImage: `url(${imgUrl})` }} />
				<DialogTitle id="responsive-dialog-title">
					{title}
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<a className={styles.Button} href={url} target="_blank" rel="noreferrer">
							Go to recipe <HiExternalLink />
						</a>
						
						{/* {notes && (
							<ul className={styles.CardNotes}>
								{notes.map((item) => (
									<li key={item}>
										{item}
									</li>
								))}
							</ul>
						)} */}

						{notes && (
							<div className={styles.CardNotes}>
								<ReactMarkdown>{notes}</ReactMarkdown>
							</div>
						)}
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</>
	);
	
	return (
		<>
			<div className={styles.Card} style={{ backgroundImage: `url(${imgUrl})` }} onClick={handleClickOpen}>
				{home && <div className={styles.CardIcon}><AiFillHome /></div>}
				<h2 className={styles.CardTitle} >{title}</h2>
			</div>
			<Dialog
				fullWidth={fullWidth}
				maxWidth={maxWidth}
				open={isOpen}
				onClose={handleClose}
			>
				<div className={styles.CardImg} style={{ backgroundImage: `url(${imgUrl})` }} />
				<DialogTitle id="responsive-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
						{/* {ingredients && (
							<ul className={styles.CardIngredients}>
								{ingredients.map((item) => (
									<li key={item}>
										{item}
									</li>
								))}
							</ul>
						)}

						{steps && (
							<ol className={styles.CardSteps}>
								{steps.map((item) => (
									<li key={item}>
										{item}
									</li>
								))}
							</ol>
						)} */}

						{ingredients && (
							<div className={styles.CardIngredients}>
								<ReactMarkdown>{ingredients}</ReactMarkdown>
							</div>
						)}

						{steps && (
							<div className={styles.CardSteps}>
								<ReactMarkdown>{steps}</ReactMarkdown>
							</div>
						)}
          </DialogContentText>
        </DialogContent>
			</Dialog>
		</>
	)
}