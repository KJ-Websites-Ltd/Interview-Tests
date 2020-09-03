
Q4. Infrastructure
==================

1. How would you ensure that your production platform is kept up to date with security patches?

All software updates (especially in the modern landscape with rapid development) can be problematic and as such i would recommend that all platform updates are manually performed by a project team lead. Otherwise there could be issues with conflicts.


2. Describe how you would help a customer to create an application deployment process that was appropriate to their needs.

The customer should have at least three different servers:

	1. development server
	2. testing (staging) server
	3. production server

This create a robust and very simple to administer process, the dev team members can work from their branches of the development server without fear of breaking anything. The testing team can then safely work on the staging server and when everyone is happy the production server can be updated on a routine basis.


3. Which functions of a common web platform might one choose to offload to a Content Delivery Network, and when?

I would suggest just the ephemeral assets, such as all images, built CSS and JS files that need to be used by the front end website.