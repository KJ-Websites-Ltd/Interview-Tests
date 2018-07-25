<?php

/**
 * Catalyst EU Test Question
 * @author John Jeeves <johnnyvibrant@gmail.com>
 * @date  26/02/2017
 * @version 0.0.1
 * @title find shorted word object
 *
 */

class findShortestWordFromText {

	private $data;
	private $results;

	public function __construct($dataUri) {

		$this->setData($dataUri);
		$rtn = "Shortest Words from Each line\n";

		foreach ($this->getData() AS $i => $string) {
			$rtn .= $this->findShortestWord($string) . "\n";
		}

		$this->setResults($rtn);

	}

	/**
	 * Find the shortes word in each text line
	 * @param text string
	 */
	private function findShortestWord(String $string) {

		$wordArray = explode(' ', $string);
		$wordArray = array_unique($wordArray);
		$shortestWord = $wordArray[0];

		foreach ($wordArray AS $word) {
			if (strlen($word) > 0 && strlen($word) < strlen($shortestWord)) {
				$shortestWord = $word;
			}
		}

		return $shortestWord;

	}

	/**
	 * @brief Get the data
	 * @details return the data array
	 * @return data array
	 */
	public function getData() {
		return $this->data;
	}

	/**
	 * @brief Set the data array from a string
	 */
	public function setData(String $uri) {

		$string = file_get_contents($uri);
		$string = explode("\n", $string);
		$this->data = $string;

		return $this;

	}

	/**
	 * @brief Set the result string
	 * @return string
	 */
	public function getResults() {
		return $this->results;
	}

	/**
	 * Set the results string
	 * @param string the result string
	 */
	public function setResults(String $string) {
		$this->results = $string;
		return $this;
	}

}
