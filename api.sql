--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: appuser; Type: TABLE; Schema: public; Owner: pvijeh; Tablespace: 
--

CREATE TABLE appuser (
    realm character varying(1024),
    username character varying(1024),
    password character varying(1024) NOT NULL,
    credentials character varying(1024),
    challenges character varying(1024),
    email character varying(1024) NOT NULL,
    emailverified boolean,
    verificationtoken character varying(1024),
    status character varying(1024),
    created timestamp with time zone,
    lastupdated timestamp with time zone,
    id integer NOT NULL
);


ALTER TABLE appuser OWNER TO pvijeh;

--
-- Name: appuser_id_seq; Type: SEQUENCE; Schema: public; Owner: pvijeh
--

CREATE SEQUENCE appuser_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE appuser_id_seq OWNER TO pvijeh;

--
-- Name: appuser_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pvijeh
--

ALTER SEQUENCE appuser_id_seq OWNED BY appuser.id;


--
-- Name: best_lists; Type: TABLE; Schema: public; Owner: pvijeh; Tablespace: 
--

CREATE TABLE best_lists (
    id integer NOT NULL,
    name text,
    attribute_name_1 integer,
    attribute_name_2 integer,
    attribute_name_3 integer,
    attribute_name_4 integer,
    attribute_name_5 integer,
    attribute_name_6 integer,
    attribute_name_7 integer,
    attribute_name_8 integer,
    attribute_name_9 integer,
    attribute_name_10 integer,
    attribute_name_11 integer,
    attribute_name_12 integer,
    attribute_name_13 integer,
    attribute_name_14 integer,
    attribute_name_15 integer,
    attribute_name_16 integer,
    attribute_name_17 integer,
    attribute_name_18 integer,
    attribute_name_19 integer,
    attribute_name_20 integer,
    attribute_name_21 integer,
    attribute_name_22 integer,
    attribute_name_23 integer,
    attribute_name_24 integer,
    attribute_name_25 integer,
    attribute_name_26 integer,
    attribute_name_27 integer,
    attribute_name_28 integer,
    attribute_name_29 integer,
    attribute_name_30 integer
);


ALTER TABLE best_lists OWNER TO pvijeh;

--
-- Name: crowd_type; Type: TABLE; Schema: public; Owner: pvijeh; Tablespace: 
--

CREATE TABLE crowd_type (
    id integer NOT NULL,
    name text,
    type1 integer,
    type2 integer,
    type3 integer,
    type4 integer,
    type5 integer,
    type6 integer,
    type7 integer,
    type8 integer,
    type9 integer,
    type10 integer
);


ALTER TABLE crowd_type OWNER TO pvijeh;

--
-- Name: photos; Type: TABLE; Schema: public; Owner: pvijeh; Tablespace: 
--

CREATE TABLE photos (
    id integer NOT NULL,
    name text,
    url text,
    height integer,
    width integer,
    alt_tag text,
    source_url text,
    source_text text
);


ALTER TABLE photos OWNER TO pvijeh;

--
-- Name: venues; Type: TABLE; Schema: public; Owner: pvijeh; Tablespace: 
--

CREATE TABLE venues (
    id integer NOT NULL,
    name text,
    votes integer,
    visits integer,
    street_address text,
    neighborhood text,
    date_added date,
    datemodified timestamp with time zone,
    geotag character varying(1024),
    venuetype character varying(1024)
);


ALTER TABLE venues OWNER TO pvijeh;

--
-- Name: votes; Type: TABLE; Schema: public; Owner: pvijeh; Tablespace: 
--

CREATE TABLE votes (
    id integer NOT NULL,
    userid integer,
    venueid integer,
    dateadded timestamp with time zone,
    datemodified timestamp with time zone,
    value integer
);


ALTER TABLE votes OWNER TO pvijeh;

--
-- Name: id; Type: DEFAULT; Schema: public; Owner: pvijeh
--

ALTER TABLE ONLY appuser ALTER COLUMN id SET DEFAULT nextval('appuser_id_seq'::regclass);


--
-- Data for Name: appuser; Type: TABLE DATA; Schema: public; Owner: pvijeh
--

COPY appuser (realm, username, password, credentials, challenges, email, emailverified, verificationtoken, status, created, lastupdated, id) FROM stdin;
\.


--
-- Name: appuser_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pvijeh
--

SELECT pg_catalog.setval('appuser_id_seq', 1, false);


--
-- Data for Name: best_lists; Type: TABLE DATA; Schema: public; Owner: pvijeh
--

COPY best_lists (id, name, attribute_name_1, attribute_name_2, attribute_name_3, attribute_name_4, attribute_name_5, attribute_name_6, attribute_name_7, attribute_name_8, attribute_name_9, attribute_name_10, attribute_name_11, attribute_name_12, attribute_name_13, attribute_name_14, attribute_name_15, attribute_name_16, attribute_name_17, attribute_name_18, attribute_name_19, attribute_name_20, attribute_name_21, attribute_name_22, attribute_name_23, attribute_name_24, attribute_name_25, attribute_name_26, attribute_name_27, attribute_name_28, attribute_name_29, attribute_name_30) FROM stdin;
1	name1	429	382	468	421	63	405	415	38	124	70	288	18	461	186	49	262	160	158	31	144	97	350	204	277	238	494	483	158	216	326
\.


--
-- Data for Name: crowd_type; Type: TABLE DATA; Schema: public; Owner: pvijeh
--

COPY crowd_type (id, name, type1, type2, type3, type4, type5, type6, type7, type8, type9, type10) FROM stdin;
\.


--
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: pvijeh
--

COPY photos (id, name, url, height, width, alt_tag, source_url, source_text) FROM stdin;
\.


--
-- Data for Name: venues; Type: TABLE DATA; Schema: public; Owner: pvijeh
--

COPY venues (id, name, votes, visits, street_address, neighborhood, date_added, datemodified, geotag, venuetype) FROM stdin;
2	name2	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
3	name3	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
4	name4	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
5	name5	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
6	name6	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
7	name7	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
8	name8	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
9	name9	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
10	name10	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
11	name11	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
12	name12	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
13	name13	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
14	name14	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
15	name15	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
16	name16	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
17	name17	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
18	name18	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
19	name19	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
20	name20	1	2	street address	neighborhood	1999-01-08	\N	\N	\N
0	string	0	0	string	string	2015-12-07	2015-12-07 19:00:00-05	string	string
1	string	0	0	string	string	2015-12-07	2015-12-07 19:00:00-05	string	string
\.


--
-- Data for Name: votes; Type: TABLE DATA; Schema: public; Owner: pvijeh
--

COPY votes (id, userid, venueid, dateadded, datemodified, value) FROM stdin;
\.


--
-- Name: appuser_pkey; Type: CONSTRAINT; Schema: public; Owner: pvijeh; Tablespace: 
--

ALTER TABLE ONLY appuser
    ADD CONSTRAINT appuser_pkey PRIMARY KEY (id);


--
-- Name: best_lists_pkey; Type: CONSTRAINT; Schema: public; Owner: pvijeh; Tablespace: 
--

ALTER TABLE ONLY best_lists
    ADD CONSTRAINT best_lists_pkey PRIMARY KEY (id);


--
-- Name: crowd_type_pkey; Type: CONSTRAINT; Schema: public; Owner: pvijeh; Tablespace: 
--

ALTER TABLE ONLY crowd_type
    ADD CONSTRAINT crowd_type_pkey PRIMARY KEY (id);


--
-- Name: photos_pkey; Type: CONSTRAINT; Schema: public; Owner: pvijeh; Tablespace: 
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- Name: venues_pkey; Type: CONSTRAINT; Schema: public; Owner: pvijeh; Tablespace: 
--

ALTER TABLE ONLY venues
    ADD CONSTRAINT venues_pkey PRIMARY KEY (id);


--
-- Name: votes_pkey; Type: CONSTRAINT; Schema: public; Owner: pvijeh; Tablespace: 
--

ALTER TABLE ONLY votes
    ADD CONSTRAINT votes_pkey PRIMARY KEY (id);


--
-- Name: votes_id_idx; Type: INDEX; Schema: public; Owner: pvijeh; Tablespace: 
--

CREATE INDEX votes_id_idx ON votes USING btree (id);


--
-- Name: public; Type: ACL; Schema: -; Owner: pvijeh
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM pvijeh;
GRANT ALL ON SCHEMA public TO pvijeh;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

