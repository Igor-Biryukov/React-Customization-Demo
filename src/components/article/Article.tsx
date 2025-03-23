import clsx from 'clsx';

import plane from 'src/images/plane.png';
import { Text } from 'src/components/text';

import styles from './Article.module.scss';

export function Article() {
	return (
		<article className={clsx(styles.article)}>
			<Text as='h1' size={45} weight={800} uppercase dynamicLite>
				Portrait of Western Switzerland
			</Text>
			<div className={styles.titleDescription}>
				<Text size={22} weight={800} uppercase align='center' dynamicLite>
					The primitivist Fishtr is painting a new budget airliner.
				</Text>
			</div>
			<img className={styles.image} src={plane} alt='Картинка самолета' />
			<Text dynamic size={18} fontStyle='italic'>
				Photo: Hans-Peter Gauster , &quot;Bombardier CSeries CS300 HB-JCA&quot;
				© 2017 CC BY-SA 2.0
			</Text>
			<Text dynamic size={18}>
				At the end of 2016, the Swiss airline Swiss received its first Canadian
				Bombardier CS300 for short- and medium-haul flights. To give the new
				145-seat aircraft a unique identity, the livery was commissioned from a
				painter. The condition was that he would create the sketch alone and
				personally adjust the painting as it was applied to the fuselage.
			</Text>
			<Text dynamic size={18}>
				The choice fell on the primitivist Matthias Forbach, who works under the
				pseudonym Fishtr. He was tasked with depicting everything best about the
				French-speaking part of Switzerland—mountains, lakes, wines, cheeses,
				friendliness, and freedom. The commission was completed in record time,
				just five months. The aircraft ended up resembling the artist himself:
				just as good-natured and with a smile from ear to ear.
			</Text>
			<Text dynamic size={18}>
				Since May 2017, the &quot;Bombardier&quot; has borne the name
				&quot;Swiss Romandy&quot; and the registration number HB-JCA; operating
				an average of 4 commercial flights per day. It can be seen in
				&quot;Domodedovo&quot;, as well as at airports in Paris, Valencia,
				Krakow, Berlin, Vienna, Zagreb, and on Mallorca, Crete, and Sicily. The
				aircraft will remain in the same livery until it is purchased by another
				airline.
			</Text>
		</article>
	);
}
