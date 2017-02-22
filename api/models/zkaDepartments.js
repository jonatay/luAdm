/**
 * Created by Jono on 17 01 30.
 */




/*

 SELECT TOP (1000) [DEPTID]
 ,[DEPTNAME]
 ,[SUPDEPTID]
 ,[InheritParentSch]
 ,[InheritDeptSch]
 ,[InheritDeptSchClass]
 ,[AutoSchPlan]
 ,[InLate]
 ,[OutEarly]
 ,[InheritDeptRule]
 ,[MinAutoSchInterval]
 ,[RegisterOT]
 ,[DefaultSchId]
 ,[ATT]
 ,[Holiday]
 ,[OverTime]
 ,[change_operator]
 ,[change_time]
 ,[create_operator]
 ,[create_time]
 ,[delete_operator]
 ,[delete_time]
 ,[status]
 ,[code]
 ,[type]
 ,[invalidate]
 FROM [ZKAccess].[dbo].[DEPARTMENTS]


 DEPTID	DEPTNAME	SUPDEPTID	InheritParentSch	InheritDeptSch	InheritDeptSchClass	AutoSchPlan	InLate	OutEarly	InheritDeptRule	MinAutoSchInterval	RegisterOT	DefaultSchId	ATT	Holiday	OverTime	change_operator	change_time	create_operator	create_time	delete_operator	delete_time	status	code	type	invalidate
 1	Link Up Security	0	1	1	1	1	1	1	1	24	1	1	1	1	1	NULL	NULL	NULL	NULL	NULL	NULL	0	0	NULL	NULL
 2	Vryheid	1	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	1	NULL	NULL
 3	Dundee	1	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	2	NULL	NULL
 4	Piet Retief	1	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	3	NULL	NULL
 5	Newcastle	1	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	4	NULL	NULL
 7	Admin VHD	2	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	11	NULL	NULL
 8	Technical VHD	2	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	12	NULL	NULL
 9	Reaction VHD	2	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	13	NULL	NULL
 10	Sales VHD	2	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	14	NULL	NULL
 11	Admin DND	3	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	21	NULL	NULL
 12	Control Room	2	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	15	NULL	NULL
 13	Technical DND	3	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	22	NULL	NULL
 14	Reaction DND	3	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	23	NULL	NULL
 15	Sales DND	3	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	24	NULL	NULL
 16	Admin PTRT	4	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	31	NULL	NULL
 17	Technical  PTRT	4	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	32	NULL	NULL
 18	Reaction PTRT	4	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	33	NULL	NULL
 19	Sales PTRT	4	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	34	NULL	NULL
 20	Admin NCL	5	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	41	NULL	NULL
 21	Technical NCL	5	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	42	NULL	NULL
 22	Reaction NCL	5	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	43	NULL	NULL
 23	Sales NCL	5	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	44	NULL	NULL
 24	Directors	1	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	01	NULL	NULL
 25	Manintanance	2	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	16	NULL	NULL
 26	Other	1	0	0	0	0	0	0	0	24	0	1	0	0	0	NULL	NULL	1	NULL	NULL	NULL	0	09	NULL	NULL


 */