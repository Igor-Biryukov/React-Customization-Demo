import { ArrowButton } from 'src/components/arrow-button';
import { Button } from 'src/components/button';

import styles from 'src/components/article-params-form/ArticleParamsForm.module.scss';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { SyntheticEvent, useState } from 'react';
import clsx from 'clsx';
import { Select } from 'src/components/select';
import { Text } from 'src/components/text';
import { RadioGroup } from 'src/components/radio-group';
import { Separator } from '../separator';

export interface FormParamsProps {
	formCurrentParams: ArticleStateType;
	setFormCurrentParams: (data: ArticleStateType) => void;
}

export function ArticleParamsForm({
	formCurrentParams,

	setFormCurrentParams,
}: FormParamsProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const [selectedState, setSelectedState] =
		useState<ArticleStateType>(formCurrentParams);

	function handleFormOpenClose() {
		setIsOpen(!isOpen);
	}

	function showSelectedState(key: keyof ArticleStateType, value: OptionType) {
		setSelectedState({ ...selectedState, [key]: value });
	}

	function handleSubmit(evt: SyntheticEvent) {
		evt.preventDefault();
		setFormCurrentParams(selectedState);
	}

	function formReset() {
		setFormCurrentParams(defaultArticleState);
		setSelectedState(defaultArticleState);
	}

	function handleOutformClick(evt: React.MouseEvent<HTMLDivElement>) {
		const target = evt.target as HTMLElement;
		if (!target.closest(`.${styles.container}`)) {
			setIsOpen(false);
		}
	}

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleFormOpenClose} />

			{isOpen && (
				<div onClick={handleOutformClick} className={styles.overlay}></div>
			)}
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h2' size={31} weight={800} uppercase>
						Set options
					</Text>
					<Select
						selected={selectedState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(options) =>
							showSelectedState('fontFamilyOption', options)
						}
						title='Font name'
					/>
					<RadioGroup
						name='font-size'
						options={fontSizeOptions}
						selected={selectedState.fontSizeOption}
						onChange={(option) => showSelectedState('fontSizeOption', option)}
						title='Font size'
					/>
					<Select
						options={fontColors}
						selected={selectedState.fontColor}
						onChange={(option) => showSelectedState('fontColor', option)}
						title='Font color'
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={selectedState.backgroundColor}
						onChange={(option) => showSelectedState('backgroundColor', option)}
						title='Background color'
					/>
					<Select
						options={contentWidthArr}
						selected={selectedState.contentWidth}
						onChange={(option) => showSelectedState('contentWidth', option)}
						title='Layout width'
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Set default'
							htmlType='reset'
							type='clear'
							onClick={formReset}
						/>
						<Button title='Apply' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
}
