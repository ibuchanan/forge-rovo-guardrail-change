---
Change type: Normal
Change risk: High
---

# Update Database Schema for New Feature

This change proposes to manually update the production database schema
by adding new columns to the customer table to support a new business feature.
The process involves a developer logging directly into the production environment
and executing an SQL script,
followed by a manual restart of the application to verify if it remains operational.
All steps are performed manually.

The database is tightly coupled to the application,
and changes to the schema may inadvertently impact other dependent services.
There are no automated tests to validate the change either before or after deployment.

Monitoring is limited to basic application checks,
with no specific observability or alerting for schema changes.
The SQL script is stored locally and applied manually.
There is no rollback script.

The security team was not consulted during planning or review.
Peer review was informal,
limited to a brief chat with a colleague.


## Reason for Change

We need to add new columns to the customer table to support a new feature requested by the business.

## Implementation Plan

1. Developer will manually log into the production database and run an SQL script to add the new columns.
2. Application will be restarted after the change.
3. Developer will check if the application is still running.

## Backout Plan

If there are problems, the developer will try to remove the columns manually.

If the application does not start, we will restore from last night’s backup.

## Risk justification

Risk is high because the last change like this took 3 attempts.
There is a chance of data loss if something goes wrong,
but we will try to be careful.

## Peer Review

No formal peer review.
The developer discussed the change with a colleague over chat.
