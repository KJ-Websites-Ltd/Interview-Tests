<?php

/**
 * Simply output a php array as a json string for the front end to consume
 * @author John Jeeves <johnnyvibrant@gmail.com>
 * @date 15/03/2018
 * @version 1
 * 
 */


$productData = [

	'product' => [

		'title' => 'sample product',
		'img' => 'http://via.placeholder.com/350x350',
		'price' => 200,
		'description' => '<p>Aliquip sunt id consequat ut non laboris esse minim quis deserunt qui elit nisi proident sit dolor aute ut enim id culpa velit veniam officia ea ea in commodo exercitation cillum officia et nostrud ut nulla sed ex nulla deserunt proident dolor ea est ullamco do in non ut commodo esse elit aliquip commodo sint ad id sit laboris nulla commodo est adipisicing est magna occaecat anim sed in in aute aliqua ullamco in adipisicing sed dolore qui elit laborum reprehenderit ex anim ex dolor amet esse nulla minim voluptate tempor in sint eu sunt sit reprehenderit proident elit officia sit cupidatat adipisicing consequat laboris enim elit magna exercitation non reprehenderit in dolor commodo in deserunt consequat enim aliqua voluptate dolor excepteur do culpa voluptate occaecat voluptate aute labore exercitation reprehenderit ut irure ex dolor ut magna reprehenderit in eiusmod enim do qui est minim incididunt sunt ut do aliqua amet labore elit irure labore esse fugiat ut consectetur mollit laborum in consectetur labore exercitation quis commodo sunt consequat ea enim dolore irure sed nisi ea dolore reprehenderit in eiusmod adipisicing qui aliqua dolor dolore ullamco.</p>',

		'options' => [

			'size' => [1,2,3,4,5,6],
			'metal' => [

				'gold' => [
					'title' => 'gold',
					'price' => 200
				], 

				'silver' => [
					'title' => 'silver',
					'price' => 180
				], 

				'platinum' => [
					'title' => 'platinum',
					'price' => 300
				], 


			]
		]

	]

];

header('Content-Type: application/json');
echo json_encode($productData);