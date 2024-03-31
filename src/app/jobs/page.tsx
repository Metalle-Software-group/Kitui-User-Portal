'use client';
import { initialFilterState } from '@/constants';
import { FindJobsCard } from '@/components/cards/FindJobsCard';
import {
	FilterCheckbox,
	FilterTag,
	JobContainer,
	Loader,
} from '@/components/reusables/Others';
import { Slogan } from '@/components/reusables/Slogan';
import { Alert } from '@/components/cards/Alert';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useQuery } from 'react-query';
import React from 'react';

import { getFilterUpdateFunction, useQueryCustomWrapper } from '@/utils';
import { TFilterTypes, TJob, TJobTypes, TMinistry } from '@/types/types';
import { SettingsIcon } from '@/components/icons';
import { fetchEndpointData } from '@/utils/server';
import { useSearchParams } from 'next/navigation';

export default function () {
	return <JobContainer />;
}
