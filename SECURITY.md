## Reporting a Vulnerability - Private Disclosure Process
Security is of the highest importance and all security vulnerabilities or suspected security vulnerabilities should be reported privately, to minimize damages.

**IMPORTANT: Do not file public issues on GitHub for security vulnerabilities**

### Proposed Email Content
Provide a descriptive subject line and in the body of the email include the following information:
* Basic identity information, such as your name and your affiliation or company.
* Detailed steps to reproduce the vulnerability  (POC scripts, screenshots, and compressed packet captures are all helpful to us).
* Description of the effects of the vulnerability, and the related hardware and software configurations, so that the Security Team can reproduce it.
* How the vulnerability affects usage and an estimation of the attack surface, if there is one.
 
## When to report a vulnerability
* When you think the project has a potential security vulnerability.
* When you suspect a potential vulnerability but you are unsure that it impacts us.
* When you know of or suspect a potential vulnerability on another project that is used by us.
## Patch, Release, and Disclosure
The Security Team will respond to vulnerability reports as follows:
 
1.  The Security Team will investigate the vulnerability and determine its effects and criticality.
2.  If the issue is not deemed to be a vulnerability, the Security Team will follow up with a detailed reason for rejection.
3.  The Security Team will initiate a conversation with the reporter within 3 business days.
4.  If a vulnerability is acknowledged and the timeline for a fix is determined, the Security Team will work on a plan to communicate with the appropriate community, including identifying mitigating steps that affected users can take to protect themselves until the fix is rolled out.
5.  The Security Team will work on fixing the vulnerability and perform internal testing before preparing to roll out the fix.
6.  The Security Team will provide early disclosure of the vulnerability by emailing the cncf-harbor-distributors-announce@lists.cncf.io mailing list. Distributors can initially plan for the vulnerability patch ahead of the fix, and later can test the fix and provide feedback to the team. 

**The terms and conditions of the Embargo Policy apply to all members of this mailing list. A request for membership represents your acceptance to the terms and conditions of the Embargo Policy**

### Embargo Policy
The information that members receive on cncf-harbor-distributors-announce@lists.cncf.io must not be made public, shared, or even hinted at anywhere beyond those who need to know within your specific team, unless you receive explicit approval to do so from the Security Team. This remains true until the public disclosure date/time agreed upon by the list. Members of the list and others cannot use the information for any reason other than to get the issue fixed for your respective distribution's users.
Before you share any information from the list with members of your team who are required to fix the issue, these team members must agree to the same terms, and only be provided with information on a need-to-know basis.

## Confidentiality, integrity and availability
We consider vulnerabilities leading to the compromise of data confidentiality, elevation of privilege, or integrity to be our highest priority concerns. Availability, in particular in areas relating to DoS and resource exhaustion, is also a serious security concern. The Security Team takes all vulnerabilities, potential vulnerabilities, and suspected vulnerabilities seriously and will investigate them in an urgent and expeditious manner.
