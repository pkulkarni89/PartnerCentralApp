const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = {
  user3: { username: 'user3', password: 'pass1', partners: [
    { name: 'Uber', status: 'Link-Now', benefits: '6X points for every $1 spent Uber Eats delivered to Marriott hotels, 3X points for every $1 spent on Uber rides, 2X points for every $1 spent on Uber eats', AccruedAwards: '' },
    { name: 'Emirates', status: 'Linked', benefits: 'Flights: Earn 3 Marriott Bonvoy points for every USD 1 spent when you fly with Emirates, on top of Skywards Miles. Hotel stays: Earn 1 Skywards Mile for every USD 1 spent on stays at hotels participating in Marriott Bonvoy, on top of Marriott Bonvoy points. Points Conversion: 3 Marriott Bonvoy points = 1 Skywards Mile. Enjoy 5,000 bonus Skywards Miles for every 60,000 Marriott Bonvoy points converted', AccruedAwards: '5,000 points and 3,000 miles' },
    { name: 'Chase', status: 'Link-Now', benefits: 'Automatic Silver Elite Status. Receive 15 Elite Night Credits per calendar year. Earn Points: 3X points for every $1 spent at Marriott hotels. 2X points for every $1 spent on all other purchases. Annual Free Night Award: Free Night Award every year after your account anniversary. Complimentary Premium Wi-Fi', AccruedAwards: '' },
    { name: 'United Airlines', status: 'Linked', benefits: 'Complimentary United MileagePlus® Premier® Silver Status. Complimentary Marriott Bonvoy Gold Elite Status for United MileagePlus® Premier® Gold, Premier® Platinum, and Premier® 1K®. Points Conversion: 1:1 Transfer of Miles to Marriott Bonvoy Points. Get 10,000 Mile Bonus for Every 60,000 Points You Transfer', AccruedAwards: 'Complementary Silver status, 10,000 pts converted to miles' },
    { name: 'Hertz', status: 'Link-Now', benefits: 'Eligible Marriott Bonvoy members can enjoy Hertz Gold Plus Rewards® elite status. 500 points per rental', AccruedAwards: ''},
    { name: 'Bilt', status: 'Link-Now', benefits: 'Transfer your Bilt® Points to Marriott Bonvoy points at a 1:1 ratio — plus, get 5,000 Marriott Bonvoy bonus points for every 20,000 Bilt Points you transfer', AccruedAwards: ''},
    { name: 'BetMGM', status: 'Link-Now', benefits: 'Transfer your BetMGM Rewards Points to Marriott Bonvoy points at a 1:1 ratio', AccruedAwards: ''},
    { name: 'American Express', status: 'Link-Now', benefits: '6X points per $1 spent at participating Marriott Bonvoy hotels. 4X points per $1 at restaurants worldwide and at U.S. supermarkets. 2X points per $1 spent on all other eligible purchases. An Annual Free Night Award each year after your anniversary', AccruedAwards: ''},
  ]},
  user4: { username: 'user4', password: 'pass2', partners: [
    { name: 'Uber', status: 'Link-Now', benefits: '6X points for every $1 spent Uber Eats delivered to Marriott hotels, 3X points for every $1 spent on Uber rides, 2X points for every $1 spent on Uber eats', AccruedAwards: '' },
    { name: 'Emirates', status: 'Linked', benefits: 'Flights: Earn 3 Marriott Bonvoy points for every USD 1 spent when you fly with Emirates, on top of Skywards Miles. Hotel stays: Earn 1 Skywards Mile for every USD 1 spent on stays at hotels participating in Marriott Bonvoy, on top of Marriott Bonvoy points. Points Conversion: 3 Marriott Bonvoy points = 1 Skywards Mile. Enjoy 5,000 bonus Skywards Miles for every 60,000 Marriott Bonvoy points converted', AccruedAwards: '5,000 points and 3,000 miles' },
    { name: 'Chase', status: 'Link-Now', benefits: 'Automatic Silver Elite Status. Receive 15 Elite Night Credits per calendar year. Earn Points: 3X points for every $1 spent at Marriott hotels. 2X points for every $1 spent on all other purchases. Annual Free Night Award: Free Night Award every year after your account anniversary. Complimentary Premium Wi-Fi', AccruedAwards: '' },
    { name: 'United Airlines', status: 'Linked', benefits: 'Complimentary United MileagePlus® Premier® Silver Status. Complimentary Marriott Bonvoy Gold Elite Status for United MileagePlus® Premier® Gold, Premier® Platinum, and Premier® 1K®. Points Conversion: 1:1 Transfer of Miles to Marriott Bonvoy Points. Get 10,000 Mile Bonus for Every 60,000 Points You Transfer', AccruedAwards: 'Complementary Silver status, 10,000 pts converted to miles' },
    { name: 'Hertz', status: 'Link-Now', benefits: 'Eligible Marriott Bonvoy members can enjoy Hertz Gold Plus Rewards® elite status. 500 points per rental', AccruedAwards: ''},
    { name: 'Bilt', status: 'Link-Now', benefits: 'Transfer your Bilt® Points to Marriott Bonvoy points at a 1:1 ratio — plus, get 5,000 Marriott Bonvoy bonus points for every 20,000 Bilt Points you transfer', AccruedAwards: ''},
    { name: 'BetMGM', status: 'Link-Now', benefits: 'Transfer your BetMGM Rewards Points to Marriott Bonvoy points at a 1:1 ratio', AccruedAwards:'' },
    { name: 'American Express', status: 'Link-Now', benefits: '6X points per $1 spent at participating Marriott Bonvoy hotels. 4X points per $1 at restaurants worldwide and at U.S. supermarkets. 2X points per $1 spent on all other eligible purchases. An Annual Free Night Award each year after your anniversary', AccruedAwards: '' },
  ]},
  alice: { username: 'alice', password: 'password123', partners: [
    { name: 'Uber', status: 'Link-Now', benefits: '6X points for every $1 spent Uber Eats delivered to Marriott hotels, 3X points for every $1 spent on Uber rides, 2X points for every $1 spent on Uber eats', AccruedAwards: '' },
    { name: 'Emirates', status: 'Linked', benefits: 'Flights: Earn 3 Marriott Bonvoy points for every USD 1 spent when you fly with Emirates, on top of Skywards Miles. Hotel stays: Earn 1 Skywards Mile for every USD 1 spent on stays at hotels participating in Marriott Bonvoy, on top of Marriott Bonvoy points. Points Conversion: 3 Marriott Bonvoy points = 1 Skywards Mile. Enjoy 5,000 bonus Skywards Miles for every 60,000 Marriott Bonvoy points converted', AccruedAwards: '5,000 points and 3,000 miles' },
    { name: 'Chase', status: 'Link-Now', benefits: 'Automatic Silver Elite Status. Receive 15 Elite Night Credits per calendar year. Earn Points: 3X points for every $1 spent at Marriott hotels. 2X points for every $1 spent on all other purchases. Annual Free Night Award: Free Night Award every year after your account anniversary. Complimentary Premium Wi-Fi', AccruedAwards: '' },
    { name: 'United Airlines', status: 'Linked', benefits: 'Complimentary United MileagePlus® Premier® Silver Status. Complimentary Marriott Bonvoy Gold Elite Status for United MileagePlus® Premier® Gold, Premier® Platinum, and Premier® 1K®. Points Conversion: 1:1 Transfer of Miles to Marriott Bonvoy Points. Get 10,000 Mile Bonus for Every 60,000 Points You Transfer', AccruedAwards: 'Complementary Silver status, 10,000 pts converted to miles' },
    { name: 'Hertz', status: 'Link-Now', benefits: 'Eligible Marriott Bonvoy members can enjoy Hertz Gold Plus Rewards® elite status. 500 points per rental', AccruedAwards: ''},
    { name: 'Bilt', status: 'Link-Now', benefits: 'Transfer your Bilt® Points to Marriott Bonvoy points at a 1:1 ratio — plus, get 5,000 Marriott Bonvoy bonus points for every 20,000 Bilt Points you transfer', AccruedAwards: ''},
    { name: 'BetMGM', status: 'Link-Now', benefits: 'Transfer your BetMGM Rewards Points to Marriott Bonvoy points at a 1:1 ratio', AccruedAwards:'' },
    { name: 'American Express', status: 'Link-Now', benefits: '6X points per $1 spent at participating Marriott Bonvoy hotels. 4X points per $1 at restaurants worldwide and at U.S. supermarkets. 2X points per $1 spent on all other eligible purchases. An Annual Free Night Award each year after your anniversary', AccruedAwards: '' },
  ]},
  bob: { username: 'Bob', password: 'securepass', partners: [
    { name: 'Uber', status: 'Link-Now', benefits: '6X points for every $1 spent Uber Eats delivered to Marriott hotels, 3X points for every $1 spent on Uber rides, 2X points for every $1 spent on Uber eats', AccruedAwards: '' },
    { name: 'Emirates', status: 'Linked', benefits: 'Flights: Earn 3 Marriott Bonvoy points for every USD 1 spent when you fly with Emirates, on top of Skywards Miles. Hotel stays: Earn 1 Skywards Mile for every USD 1 spent on stays at hotels participating in Marriott Bonvoy, on top of Marriott Bonvoy points. Points Conversion: 3 Marriott Bonvoy points = 1 Skywards Mile. Enjoy 5,000 bonus Skywards Miles for every 60,000 Marriott Bonvoy points converted', AccruedAwards: '5,000 points and 3,000 miles' },
    { name: 'Chase', status: 'Link-Now', benefits: 'Automatic Silver Elite Status. Receive 15 Elite Night Credits per calendar year. Earn Points: 3X points for every $1 spent at Marriott hotels. 2X points for every $1 spent on all other purchases. Annual Free Night Award: Free Night Award every year after your account anniversary. Complimentary Premium Wi-Fi', AccruedAwards: '' },
    { name: 'United Airlines', status: 'Linked', benefits: 'Complimentary United MileagePlus® Premier® Silver Status. Complimentary Marriott Bonvoy Gold Elite Status for United MileagePlus® Premier® Gold, Premier® Platinum, and Premier® 1K®. Points Conversion: 1:1 Transfer of Miles to Marriott Bonvoy Points. Get 10,000 Mile Bonus for Every 60,000 Points You Transfer', AccruedAwards: 'Complementary Silver status, 10,000 pts converted to miles' },
    { name: 'Hertz', status: 'Link-Now', benefits: 'Eligible Marriott Bonvoy members can enjoy Hertz Gold Plus Rewards® elite status. 500 points per rental', AccruedAwards: ''},
    { name: 'Bilt', status: 'Link-Now', benefits: 'Transfer your Bilt® Points to Marriott Bonvoy points at a 1:1 ratio — plus, get 5,000 Marriott Bonvoy bonus points for every 20,000 Bilt Points you transfer', AccruedAwards: ''},
    { name: 'BetMGM', status: 'Link-Now', benefits: 'Transfer your BetMGM Rewards Points to Marriott Bonvoy points at a 1:1 ratio', AccruedAwards:'' },
    { name: 'American Express', status: 'Link-Now', benefits: '6X points per $1 spent at participating Marriott Bonvoy hotels. 4X points per $1 at restaurants worldwide and at U.S. supermarkets. 2X points per $1 spent on all other eligible purchases. An Annual Free Night Award each year after your anniversary', AccruedAwards: '' },
  ]},
  charlie: { username: 'charlie', password: 'mypassword', partners: [
    { name: 'Uber', status: 'Link-Now', benefits: '6X points for every $1 spent Uber Eats delivered to Marriott hotels, 3X points for every $1 spent on Uber rides, 2X points for every $1 spent on Uber eats', AccruedAwards: '' },
    { name: 'Emirates', status: 'Linked', benefits: 'Flights: Earn 3 Marriott Bonvoy points for every USD 1 spent when you fly with Emirates, on top of Skywards Miles. Hotel stays: Earn 1 Skywards Mile for every USD 1 spent on stays at hotels participating in Marriott Bonvoy, on top of Marriott Bonvoy points. Points Conversion: 3 Marriott Bonvoy points = 1 Skywards Mile. Enjoy 5,000 bonus Skywards Miles for every 60,000 Marriott Bonvoy points converted', AccruedAwards: '5,000 points and 3,000 miles' },
    { name: 'Chase', status: 'Link-Now', benefits: 'Automatic Silver Elite Status. Receive 15 Elite Night Credits per calendar year. Earn Points: 3X points for every $1 spent at Marriott hotels. 2X points for every $1 spent on all other purchases. Annual Free Night Award: Free Night Award every year after your account anniversary. Complimentary Premium Wi-Fi', AccruedAwards: '' },
    { name: 'United Airlines', status: 'Linked', benefits: 'Complimentary United MileagePlus® Premier® Silver Status. Complimentary Marriott Bonvoy Gold Elite Status for United MileagePlus® Premier® Gold, Premier® Platinum, and Premier® 1K®. Points Conversion: 1:1 Transfer of Miles to Marriott Bonvoy Points. Get 10,000 Mile Bonus for Every 60,000 Points You Transfer', AccruedAwards: 'Complementary Silver status, 10,000 pts converted to miles' },
    { name: 'Hertz', status: 'Link-Now', benefits: 'Eligible Marriott Bonvoy members can enjoy Hertz Gold Plus Rewards® elite status. 500 points per rental', AccruedAwards: ''},
    { name: 'Bilt', status: 'Link-Now', benefits: 'Transfer your Bilt® Points to Marriott Bonvoy points at a 1:1 ratio — plus, get 5,000 Marriott Bonvoy bonus points for every 20,000 Bilt Points you transfer', AccruedAwards: ''},
    { name: 'BetMGM', status: 'Link-Now', benefits: 'Transfer your BetMGM Rewards Points to Marriott Bonvoy points at a 1:1 ratio', AccruedAwards:'' },
    { name: 'American Express', status: 'Link-Now', benefits: '6X points per $1 spent at participating Marriott Bonvoy hotels. 4X points per $1 at restaurants worldwide and at U.S. supermarkets. 2X points per $1 spent on all other eligible purchases. An Annual Free Night Award each year after your anniversary', AccruedAwards: '' },
  ]},
  alex: { username: 'alex', password: 'mypassword', partners: [
    { name: 'Uber', status: 'Link-Now', benefits: '6X points for every $1 spent Uber Eats delivered to Marriott hotels, 3X points for every $1 spent on Uber rides, 2X points for every $1 spent on Uber eats', AccruedAwards: '' },
    { name: 'Emirates', status: 'Linked', benefits: 'Flights: Earn 3 Marriott Bonvoy points for every USD 1 spent when you fly with Emirates, on top of Skywards Miles. Hotel stays: Earn 1 Skywards Mile for every USD 1 spent on stays at hotels participating in Marriott Bonvoy, on top of Marriott Bonvoy points. Points Conversion: 3 Marriott Bonvoy points = 1 Skywards Mile. Enjoy 5,000 bonus Skywards Miles for every 60,000 Marriott Bonvoy points converted', AccruedAwards: '5,000 points and 3,000 miles' },
    { name: 'Chase', status: 'Link-Now', benefits: 'Automatic Silver Elite Status. Receive 15 Elite Night Credits per calendar year. Earn Points: 3X points for every $1 spent at Marriott hotels. 2X points for every $1 spent on all other purchases. Annual Free Night Award: Free Night Award every year after your account anniversary. Complimentary Premium Wi-Fi', AccruedAwards: '' },
    { name: 'United Airlines', status: 'Linked', benefits: 'Complimentary United MileagePlus® Premier® Silver Status. Complimentary Marriott Bonvoy Gold Elite Status for United MileagePlus® Premier® Gold, Premier® Platinum, and Premier® 1K®. Points Conversion: 1:1 Transfer of Miles to Marriott Bonvoy Points. Get 10,000 Mile Bonus for Every 60,000 Points You Transfer', AccruedAwards: 'Complementary Silver status, 10,000 pts converted to miles' },
    { name: 'Hertz', status: 'Link-Now', benefits: 'Eligible Marriott Bonvoy members can enjoy Hertz Gold Plus Rewards® elite status. 500 points per rental', AccruedAwards: ''},
    { name: 'Bilt', status: 'Link-Now', benefits: 'Transfer your Bilt® Points to Marriott Bonvoy points at a 1:1 ratio — plus, get 5,000 Marriott Bonvoy bonus points for every 20,000 Bilt Points you transfer', AccruedAwards: ''},
    { name: 'BetMGM', status: 'Link-Now', benefits: 'Transfer your BetMGM Rewards Points to Marriott Bonvoy points at a 1:1 ratio', AccruedAwards:'' },
    { name: 'American Express', status: 'Link-Now', benefits: '6X points per $1 spent at participating Marriott Bonvoy hotels. 4X points per $1 at restaurants worldwide and at U.S. supermarkets. 2X points per $1 spent on all other eligible purchases. An Annual Free Night Award each year after your anniversary', AccruedAwards: '' },
  ]},
  john: { username: 'john', password: 'john', partners: [
    { name: 'Uber', status: 'Link-Now', benefits: '6X points for every $1 spent Uber Eats delivered to Marriott hotels, 3X points for every $1 spent on Uber rides, 2X points for every $1 spent on Uber eats', AccruedAwards: '' },
    { name: 'Emirates', status: 'Linked', benefits: 'Flights: Earn 3 Marriott Bonvoy points for every USD 1 spent when you fly with Emirates, on top of Skywards Miles. Hotel stays: Earn 1 Skywards Mile for every USD 1 spent on stays at hotels participating in Marriott Bonvoy, on top of Marriott Bonvoy points. Points Conversion: 3 Marriott Bonvoy points = 1 Skywards Mile. Enjoy 5,000 bonus Skywards Miles for every 60,000 Marriott Bonvoy points converted', AccruedAwards: '5,000 points and 3,000 miles' },
    { name: 'Chase', status: 'Link-Now', benefits: 'Automatic Silver Elite Status. Receive 15 Elite Night Credits per calendar year. Earn Points: 3X points for every $1 spent at Marriott hotels. 2X points for every $1 spent on all other purchases. Annual Free Night Award: Free Night Award every year after your account anniversary. Complimentary Premium Wi-Fi', AccruedAwards: '' },
    { name: 'United Airlines', status: 'Linked', benefits: 'Complimentary United MileagePlus® Premier® Silver Status. Complimentary Marriott Bonvoy Gold Elite Status for United MileagePlus® Premier® Gold, Premier® Platinum, and Premier® 1K®. Points Conversion: 1:1 Transfer of Miles to Marriott Bonvoy Points. Get 10,000 Mile Bonus for Every 60,000 Points You Transfer', AccruedAwards: 'Complementary Silver status, 10,000 pts converted to miles' },
    { name: 'Hertz', status: 'Link-Now', benefits: 'Eligible Marriott Bonvoy members can enjoy Hertz Gold Plus Rewards® elite status. 500 points per rental', AccruedAwards: ''},
    { name: 'Bilt', status: 'Link-Now', benefits: 'Transfer your Bilt® Points to Marriott Bonvoy points at a 1:1 ratio — plus, get 5,000 Marriott Bonvoy bonus points for every 20,000 Bilt Points you transfer', AccruedAwards: ''},
    { name: 'BetMGM', status: 'Link-Now', benefits: 'Transfer your BetMGM Rewards Points to Marriott Bonvoy points at a 1:1 ratio', AccruedAwards: ''},
    { name: 'American Express', status: 'Link-Now', benefits: '6X points per $1 spent at participating Marriott Bonvoy hotels. 4X points per $1 at restaurants worldwide and at U.S. supermarkets. 2X points per $1 spent on all other eligible purchases. An Annual Free Night Award each year after your anniversary', AccruedAwards: ''},
  ]},
  miller: { username: 'miller', password: 'miller', partners: [
    { name: 'Uber', status: 'Link-Now', benefits: '6X points for every $1 spent Uber Eats delivered to Marriott hotels, 3X points for every $1 spent on Uber rides, 2X points for every $1 spent on Uber eats', AccruedAwards: '' },
    { name: 'Emirates', status: 'Linked', benefits: 'Flights: Earn 3 Marriott Bonvoy points for every USD 1 spent when you fly with Emirates, on top of Skywards Miles. Hotel stays: Earn 1 Skywards Mile for every USD 1 spent on stays at hotels participating in Marriott Bonvoy, on top of Marriott Bonvoy points. Points Conversion: 3 Marriott Bonvoy points = 1 Skywards Mile. Enjoy 5,000 bonus Skywards Miles for every 60,000 Marriott Bonvoy points converted', AccruedAwards: '5,000 points and 3,000 miles' },
    { name: 'Chase', status: 'Link-Now', benefits: 'Automatic Silver Elite Status. Receive 15 Elite Night Credits per calendar year. Earn Points: 3X points for every $1 spent at Marriott hotels. 2X points for every $1 spent on all other purchases. Annual Free Night Award: Free Night Award every year after your account anniversary. Complimentary Premium Wi-Fi', AccruedAwards: '' },
    { name: 'United Airlines', status: 'Linked', benefits: 'Complimentary United MileagePlus® Premier® Silver Status. Complimentary Marriott Bonvoy Gold Elite Status for United MileagePlus® Premier® Gold, Premier® Platinum, and Premier® 1K®. Points Conversion: 1:1 Transfer of Miles to Marriott Bonvoy Points. Get 10,000 Mile Bonus for Every 60,000 Points You Transfer', AccruedAwards: 'Complementary Silver status, 10,000 pts converted to miles' },
    { name: 'Hertz', status: 'Link-Now', benefits: 'Eligible Marriott Bonvoy members can enjoy Hertz Gold Plus Rewards® elite status. 500 points per rental', AccruedAwards: ''},
    { name: 'Bilt', status: 'Link-Now', benefits: 'Transfer your Bilt® Points to Marriott Bonvoy points at a 1:1 ratio — plus, get 5,000 Marriott Bonvoy bonus points for every 20,000 Bilt Points you transfer', AccruedAwards: ''},
    { name: 'BetMGM', status: 'Link-Now', benefits: 'Transfer your BetMGM Rewards Points to Marriott Bonvoy points at a 1:1 ratio', AccruedAwards:'' },
    { name: 'American Express', status: 'Link-Now', benefits: '6X points per $1 spent at participating Marriott Bonvoy hotels. 4X points per $1 at restaurants worldwide and at U.S. supermarkets. 2X points per $1 spent on all other eligible purchases. An Annual Free Night Award each year after your anniversary', AccruedAwards: '' },
  ]},
  will: { username: 'will', password: 'will', partners: [
    { name: 'Uber', status: 'Link-Now', benefits: '6X points for every $1 spent Uber Eats delivered to Marriott hotels, 3X points for every $1 spent on Uber rides, 2X points for every $1 spent on Uber eats', AccruedAwards: '' },
    { name: 'Emirates', status: 'Linked', benefits: 'Flights: Earn 3 Marriott Bonvoy points for every USD 1 spent when you fly with Emirates, on top of Skywards Miles. Hotel stays: Earn 1 Skywards Mile for every USD 1 spent on stays at hotels participating in Marriott Bonvoy, on top of Marriott Bonvoy points. Points Conversion: 3 Marriott Bonvoy points = 1 Skywards Mile. Enjoy 5,000 bonus Skywards Miles for every 60,000 Marriott Bonvoy points converted', AccruedAwards: '5,000 points and 3,000 miles' },
    { name: 'Chase', status: 'Link-Now', benefits: 'Automatic Silver Elite Status. Receive 15 Elite Night Credits per calendar year. Earn Points: 3X points for every $1 spent at Marriott hotels. 2X points for every $1 spent on all other purchases. Annual Free Night Award: Free Night Award every year after your account anniversary. Complimentary Premium Wi-Fi', AccruedAwards: '' },
    { name: 'United Airlines', status: 'Linked', benefits: 'Complimentary United MileagePlus® Premier® Silver Status. Complimentary Marriott Bonvoy Gold Elite Status for United MileagePlus® Premier® Gold, Premier® Platinum, and Premier® 1K®. Points Conversion: 1:1 Transfer of Miles to Marriott Bonvoy Points. Get 10,000 Mile Bonus for Every 60,000 Points You Transfer', AccruedAwards: 'Complementary Silver status, 10,000 pts converted to miles' },
    { name: 'Hertz', status: 'Link-Now', benefits: 'Eligible Marriott Bonvoy members can enjoy Hertz Gold Plus Rewards® elite status. 500 points per rental', AccruedAwards: ''},
    { name: 'Bilt', status: 'Link-Now', benefits: 'Transfer your Bilt® Points to Marriott Bonvoy points at a 1:1 ratio — plus, get 5,000 Marriott Bonvoy bonus points for every 20,000 Bilt Points you transfer', AccruedAwards: ''},
    { name: 'BetMGM', status: 'Link-Now', benefits: 'Transfer your BetMGM Rewards Points to Marriott Bonvoy points at a 1:1 ratio', AccruedAwards:'' },
    { name: 'American Express', status: 'Link-Now', benefits: '6X points per $1 spent at participating Marriott Bonvoy hotels. 4X points per $1 at restaurants worldwide and at U.S. supermarkets. 2X points per $1 spent on all other eligible purchases. An Annual Free Night Award each year after your anniversary', AccruedAwards: '' },
  ]},
  jones: { username: 'jones', password: 'jones', partners: [
    { name: 'Uber', status: 'Link-Now', benefits: '6X points for every $1 spent Uber Eats delivered to Marriott hotels, 3X points for every $1 spent on Uber rides, 2X points for every $1 spent on Uber eats', AccruedAwards: '' },
    { name: 'Emirates', status: 'Linked', benefits: 'Flights: Earn 3 Marriott Bonvoy points for every USD 1 spent when you fly with Emirates, on top of Skywards Miles. Hotel stays: Earn 1 Skywards Mile for every USD 1 spent on stays at hotels participating in Marriott Bonvoy, on top of Marriott Bonvoy points. Points Conversion: 3 Marriott Bonvoy points = 1 Skywards Mile. Enjoy 5,000 bonus Skywards Miles for every 60,000 Marriott Bonvoy points converted', AccruedAwards: '5,000 points and 3,000 miles' },
    { name: 'Chase', status: 'Link-Now', benefits: 'Automatic Silver Elite Status. Receive 15 Elite Night Credits per calendar year. Earn Points: 3X points for every $1 spent at Marriott hotels. 2X points for every $1 spent on all other purchases. Annual Free Night Award: Free Night Award every year after your account anniversary. Complimentary Premium Wi-Fi', AccruedAwards: '' },
    { name: 'United Airlines', status: 'Linked', benefits: 'Complimentary United MileagePlus® Premier® Silver Status. Complimentary Marriott Bonvoy Gold Elite Status for United MileagePlus® Premier® Gold, Premier® Platinum, and Premier® 1K®. Points Conversion: 1:1 Transfer of Miles to Marriott Bonvoy Points. Get 10,000 Mile Bonus for Every 60,000 Points You Transfer', AccruedAwards: 'Complementary Silver status, 10,000 pts converted to miles' },
    { name: 'Hertz', status: 'Link-Now', benefits: 'Eligible Marriott Bonvoy members can enjoy Hertz Gold Plus Rewards® elite status. 500 points per rental', AccruedAwards: ''},
    { name: 'Bilt', status: 'Link-Now', benefits: 'Transfer your Bilt® Points to Marriott Bonvoy points at a 1:1 ratio — plus, get 5,000 Marriott Bonvoy bonus points for every 20,000 Bilt Points you transfer', AccruedAwards: ''},
    { name: 'BetMGM', status: 'Link-Now', benefits: 'Transfer your BetMGM Rewards Points to Marriott Bonvoy points at a 1:1 ratio', AccruedAwards:'' },
    { name: 'American Express', status: 'Link-Now', benefits: '6X points per $1 spent at participating Marriott Bonvoy hotels. 4X points per $1 at restaurants worldwide and at U.S. supermarkets. 2X points per $1 spent on all other eligible purchases. An Annual Free Night Award each year after your anniversary', AccruedAwards: '' },
  ]},
};

app.post('/api/signin', (req, res) => {
  const { username, password } = req.body;
  console.log(`Sign-in attempt for username: ${username}, password: ${password}`);
  const user = users[username];
  if (user && user.password === password) {
    user.partners.forEach(partner => {
      if (partner.name === 'Emirates' || partner.name === 'United Airlines') {
        partner.status = 'Linked';
        if (partner.name === 'Emirates') {
          partner.AccruedAwards = '5,000 points and 3,000 miles';
        } else if (partner.name === 'United Airlines') {
          partner.AccruedAwards = 'Complementary Silver status, 10,000 pts converted to miles';
        }
      }
    });
    res.status(200).send({ message: 'Sign in successful', username: user.username });
  } else {
    console.log(`Invalid credentials for username: ${username}`);
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

app.post('/api/link-account', (req, res) => {
  const { username, partnerName } = req.body;
  console.log(`Link account attempt for username: ${username}, partnerName: ${partnerName}`);
  const user = users[username];
  if (user) {
    const partner = user.partners.find(p => p.name === partnerName);
    if (partner) {
      partner.status = 'Linked';
      if (partner.name === 'Chase') {
        partner.AccruedAwards = 'Complementary Gold status, 15 Elite night credits';
      } else if (partner.name === 'Uber') {
        partner.AccruedAwards = '';
      } else if (partner.name === 'United Airlines') {
        partner.AccruedAwards = 'Complementary Silver status, 10,000 pts converted to miles';
      } else if (partner.name === 'Emirates') {
        partner.AccruedAwards = '5,000 points and 3,000 miles';
      } else {
        partner.AccruedAwards = partner.benefits;
      }
      res.status(200).send({ message: 'Account Linked Successfully', partners: user.partners });
    } else {
      console.log(`Partner not found for partnerName: ${partnerName}`);
      res.status(404).send({ message: 'Partner not found' });
    }
  } else {
    console.log(`User not found for username: ${username}`);
    res.status(404).send({ message: 'User not found' });
  }
});

app.post('/api/partner-central', (req, res) => {
  const { username } = req.body;
  console.log(`Fetching partner data for username: ${username}`);
  const user = users[username];
  if (user) {
    res.status(200).send(user.partners);
  } else {
    console.log(`User not found for username: ${username}`);
    res.status(404).send({ message: 'User not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
