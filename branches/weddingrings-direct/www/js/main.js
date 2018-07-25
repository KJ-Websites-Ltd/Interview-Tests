/**
 * @brief Basic product page outline, based on Kube CSS framework
 * @author John Jeeves <johnnyvibrant@gmail.com>
 * @date 15/03/2018
 * @version 1
 */


$( document ).ready(function() {
    

	//product variables
	var productData = './data/product.php',
		overlay = $('.overlay'),
		productContainer = $('.product'),
		optionsForm,
		price;
		errorMessage = 'sorry product failed to load',
		rendered = {},
		_hidden = 'hide';


	//get the product data in to populate the page first
	$.ajax({
		url: productData
	}).done(function(res) {

		productData = res.product;

		//change page document title
		document.title = document.title.replace('{{producttitle}}', productData.title);

		//template out the product details
		var templateProduct = productContainer.html();
		Mustache.parse(templateProduct);
		rendered = Mustache.render(templateProduct, {
				producttitle : productData.title,
				productdescription: productData.description,
				productprice: productData.price,
				productimg: productData.img
				 });

		productContainer.html(rendered);

		optionsForm = productContainer.find('.form');
		price = productContainer.find('.price');

		//update the options form elements
		var sizeSelect = optionsForm.find('select[name="size"]'),
			metalSelect = optionsForm.find('select[name="metal"]');

			//update the size select
			$.each(productData.options.size, function(i,s) {
				var opt = $('<option/>', {
					value: i,
					text: s
				});
				sizeSelect.append(opt);
			});

			//update the metals selector
			$.each(productData.options.metal, function(i,m) {
				var opt = $('<option/>', {
					value: m.price,
					text: m.title
				});
				metalSelect.append(opt);
			});


			//change the price on metal option change
			metalSelect.on('change', function(e) {
				price.html(this.value);
			})


		//hide the overlay
		overlay.addClass(_hidden);

	}).fail(function(err) {
		//display error on fail
		overlay.html(errorMessage)
	})



});